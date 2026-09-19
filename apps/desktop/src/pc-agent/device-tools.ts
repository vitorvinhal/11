/**
 * Device Tools — executor de ferramentas do Agente PC (Windows).
 * Implementa os 21 namespaces `device.*` via Node (fs) + PowerShell.
 * Acesso ao dispositivo sem sandbox além das permissões do SO.
 */

import { execFile } from "child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  copyFileSync,
  renameSync,
  mkdirSync,
  statSync,
} from "fs";
import { join, dirname, resolve, basename, extname } from "path";
import {
  homedir,
  platform,
  release,
  arch,
  totalmem,
  freemem,
  hostname,
} from "os";
import { randomUUID } from "crypto";

const MEDIA_DIRS: Record<string, string[]> = {
  fotos: ["Pictures"],
  videos: ["Videos"],
  musica: ["Music"],
};

function runPS(script: string, timeoutMs = 30_000): Promise<string> {
  return new Promise((resolvePromise, rejectPromise) => {
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-Command", script],
      { timeout: timeoutMs, maxBuffer: 10 * 1024 * 1024 },
      (err, stdout, stderr) => {
        if (err) {
          const msg = stderr?.trim() || (err as Error).message;
          rejectPromise(new Error(msg));
          return;
        }
        resolvePromise(stdout.trim());
      },
    );
  });
}

function tryPS(script: string, timeoutMs = 30_000): Promise<string | null> {
  return runPS(script, timeoutMs).catch(() => null);
}

function jsonOut(data: unknown): string {
  return JSON.stringify(data);
}

function lastErr(e: unknown): string {
  return (e as Error).message;
}

// ─── Filesystem ─────────────────────────────────────────────────────────────

async function fsList(args: any) {
  const p = resolve(args.path ?? homedir());
  if (!existsSync(p)) throw new Error(`Diretório não existe: ${p}`);
  const entries = readdirSync(p, { withFileTypes: true }).map((ent) => {
    const full = join(p, ent.name);
    let size: number | null = null;
    try {
      size = ent.isDirectory() ? null : statSync(full).size;
    } catch {
      /* ignore */
    }
    return { name: ent.name, isDir: ent.isDirectory(), size };
  });
  return { path: p, entries };
}

async function fsRead(args: any) {
  const p = resolve(args.path);
  if (!existsSync(p)) throw new Error(`Arquivo não existe: ${p}`);
  const maxBytes = args.maxBytes ?? 1024 * 1024; // default 1MB
  const buf = readFileSync(p);
  const truncated = buf.length > maxBytes;
  return {
    path: p,
    size: buf.length,
    truncated,
    content: buf.subarray(0, maxBytes).toString("utf-8"),
  };
}

async function fsWrite(args: any) {
  const p = resolve(args.path);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, String(args.content ?? ""), "utf-8");
  return {
    path: p,
    bytes: Buffer.byteLength(String(args.content ?? ""), "utf-8"),
  };
}

async function fsDelete(args: any) {
  const p = resolve(args.path);
  if (!existsSync(p)) throw new Error(`Arquivo não existe: ${p}`);
  unlinkSync(p);
  return { deleted: p };
}

async function fsCopy(args: any) {
  const src = resolve(args.source);
  const dst = resolve(args.destination);
  if (!existsSync(src)) throw new Error(`Arquivo não existe: ${src}`);
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  return { copied: { from: src, to: dst } };
}

async function fsMove(args: any) {
  const src = resolve(args.source);
  const dst = resolve(args.destination);
  if (!existsSync(src)) throw new Error(`Arquivo não existe: ${src}`);
  mkdirSync(dirname(dst), { recursive: true });
  renameSync(src, dst);
  return { moved: { from: src, to: dst } };
}

// ─── Terminal ───────────────────────────────────────────────────────────────

async function exec(args: any) {
  const command = String(args.command ?? "");
  if (!command) throw new Error("command é obrigatório");
  const timeoutMs = Math.min(args.timeoutMs ?? 30_000, 120_000);
  const cwd = args.cwd ? resolve(args.cwd) : homedir();
  const stdout = await runPS(command, timeoutMs);
  return { cwd, command, output: stdout };
}

// ─── Media ──────────────────────────────────────────────────────────────────

async function mediaList(args: any) {
  const type = String(args.type ?? "fotos");
  const limit = Math.min(args.limit ?? 50, 500);
  const home = homedir();
  const folders = MEDIA_DIRS[type] ?? MEDIA_DIRS.fotos;
  const items: Array<{ path: string; name: string; size: number | null }> = [];
  for (const folder of folders) {
    const dir = join(home, folder);
    if (!existsSync(dir)) continue;
    for (const file of readdirSync(dir)) {
      try {
        const full = join(dir, file);
        const st = statSync(full);
        if (!st.isFile()) continue;
        items.push({ path: full, name: file, size: st.size });
        if (items.length >= limit) break;
      } catch {
        /* ignore */
      }
    }
    if (items.length >= limit) break;
  }
  return { type, count: items.length, items };
}

async function mediaOpen(args: any) {
  const p = resolve(args.path);
  if (!existsSync(p)) throw new Error(`Arquivo não existe: ${p}`);
  await runPS(`Start-Process -FilePath "${p.replace(/'/g, "''")}"`);
  return { opened: p };
}

async function mediaImport(_args: any) {
  // Importa diretamente do device — no PC abre a galeria.
  await tryPS('Start-Process "ms-photos:"');
  return { note: "Galeria de Fotos aberta no dispositivo." };
}

// ─── Apps ───────────────────────────────────────────────────────────────────

async function appsList(args: any) {
  const ps = (await tryPS(
    `Get-StartApps | Select-Object -First ${args.limit ?? 100} | ConvertTo-Json -Compress`,
  )) as string | null;
  if (!ps) return { apps: [] };
  try {
    const parsed = JSON.parse(ps);
    const arr = Array.isArray(parsed) ? parsed : [parsed];
    return { apps: arr.map((a: any) => ({ name: a.Name, appId: a.AppID })) };
  } catch {
    return { apps: [], raw: ps.slice(0, 2000) };
  }
}

async function appsLaunch(args: any) {
  const id = String(args.id ?? "");
  const uri = args.uri;
  if (!id) throw new Error("id é obrigatório (nome do app ou AppID)");
  if (uri) {
    await runPS(`Start-Process "${uri.replace(/"/g, "")}"`);
    return { launched: uri };
  }
  // Tenta AppID da Start Menu primeiro, depois nome como executável.
  await runPS(
    `$a=Get-StartApps | Where-Object {$_.Name -like "*${id.replace(/"/g, "")}*"} | Select-Object -First 1; if($a){Start-Process "shell:AppsFolder\\$($a.AppID)"}else{Start-Process "${id.replace(/"/g, "")}"}`,
  );
  return { launched: id };
}

// ─── Settings ───────────────────────────────────────────────────────────────

async function settingsGet(args: any) {
  const key = String(args.key ?? "");
  switch (key) {
    case "wallpaper": {
      const wp = await tryPS(
        '(Get-ItemProperty "HKCU:\\Control Panel\\Desktop").Wallpaper',
      );
      return { key, value: wp };
    }
    case "theme": {
      const theme = await tryPS(
        '(Get-ItemProperty "HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize").AppsUseLightTheme',
      );
      return {
        key,
        value:
          theme === "0" || theme === "1"
            ? theme === "1"
              ? "light"
              : "dark"
            : theme,
      };
    }
    case "brightness": {
      const b = await tryPS(
        "(Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightness).CurrentBrightness",
      );
      return { key, value: b };
    }
    default:
      throw new Error(
        `Chave de configuração sem suporte: ${key}. Suportadas: wallpaper, theme, brightness.`,
      );
  }
}

async function settingsSet(args: any) {
  const key = String(args.key ?? "");
  const value = String(args.value ?? "");
  switch (key) {
    case "wallpaper": {
      if (!existsSync(resolve(value)))
        throw new Error(`Imagem não existe: ${value}`);
      await runPS(
        `Add-Type -TypeDefinition 'using System;using System.Runtime.InteropServices;public class W{[DllImport("user32.dll")]public static extern int SystemParametersInfo(int uAct,int uParam,string lpvParam,int fuWinIni);}';[W]::SystemParametersInfo(20,0,"${value.replace(/"/g, "")}",3)`,
      );
      return { key, value: "definido" };
    }
    case "theme": {
      const n = value === "dark" ? 0 : 1;
      await runPS(
        `Set-ItemProperty "HKCU:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize" AppsUseLightTheme -Value ${n}`,
      );
      return { key, value: value === "dark" ? "dark" : "light" };
    }
    case "brightness": {
      const n = Math.max(0, Math.min(100, parseInt(value, 10) || 50));
      const ok = await tryPS(
        `(Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightnessMethods).WmiSetBrightness(1,$n)`,
      );
      if (ok === null)
        return {
          key,
          value,
          note: "Ajuste não retornou confirmação (pode exigir admin)",
        };
      return { key, value: n };
    }
    default:
      throw new Error(
        `Chave de configuração sem suporte: ${key}. Suportadas: wallpaper, theme, brightness.`,
      );
  }
}

// ─── Screen ─────────────────────────────────────────────────────────────────

async function screenShot() {
  const tmp = join(
    process.env.TEMP ?? homedir(),
    `11-screen-${randomUUID()}.png`,
  );
  await runPS(
    `Add-Type -AssemblyName System.Windows.Forms,System.Drawing; $b=[System.Windows.Forms.Screen]::PrimaryScreen.Bounds; $bmp=New-Object System.Drawing.Bitmap $b.Width,$b.Height; $g=[System.Drawing.Graphics]::FromImage($bmp); $g.CopyFromScreen($b.Location,[System.Drawing.Point]::Empty,$b.Size); $bmp.Save("${tmp}")`,
  );
  const st = statSync(tmp);
  const b64 = readFileSync(tmp).toString("base64");
  unlinkSync(tmp);
  return { path: tmp, size: st.size, base64: b64 };
}

// ─── System ─────────────────────────────────────────────────────────────────

async function systemInfo() {
  return {
    hostname: hostname(),
    os: platform(),
    release: release(),
    arch: arch(),
    totalMemoryGB: +(totalmem() / 1024 ** 3).toFixed(1),
    freeMemoryGB: +(freemem() / 1024 ** 3).toFixed(1),
    home: homedir(),
  };
}

async function systemBattery() {
  const ps = await tryPS(
    "(Get-CimInstance Win32_Battery | Select-Object EstimatedChargeRemaining,BatteryStatus,EstimatedRunTime | ConvertTo-Json -Compress)",
  );
  try {
    return ps ? JSON.parse(ps) : { note: "Sem bateria (desktop sem battery)" };
  } catch {
    return { raw: ps };
  }
}

async function systemProcesses(args: any) {
  const ps = await tryPS(
    `Get-Process | Sort-Object CPU -Descending | Select-Object -First ${args.limit ?? 20} ProcessName,Id,CPU,WorkingSet64,Responding | ConvertTo-Json -Compress`,
  );
  try {
    const parsed = JSON.parse(ps ?? "[]");
    const arr = Array.isArray(parsed) ? parsed : [parsed];
    return {
      processes: arr.map((p: any) => ({
        name: p.ProcessName,
        pid: p.Id,
        cpu: +(p.CPU ?? 0),
        memoryMB: +(p.WorkingSet64 / 1024 / 1024).toFixed(1),
        responding: p.Responding ?? null,
      })),
    };
  } catch {
    return { raw: ps };
  }
}

async function systemNetwork() {
  const ps = await tryPS(
    "Get-NetIPConfiguration | Where-Object {$_.IPv4DefaultGateway -ne $null} | Select-Object -First 1 InterfaceAlias,IPv4Address,IPv4DefaultGateway | ConvertTo-Json -Compress",
  );
  try {
    return ps ? JSON.parse(ps) : { note: "Sem gateway IPv4" };
  } catch {
    return { raw: ps };
  }
}

async function systemClipboard(args: any) {
  const action = String(args.action ?? "read");
  if (action === "read") {
    const value = await tryPS("Get-Clipboard -Raw");
    return { action, value };
  }
  await runPS(
    `Set-Clipboard -Value "${String(args.value ?? "").replace(/"/g, '`"')}"`,
  );
  return { action: "write", status: "ok" };
}

async function systemNotify(args: any) {
  const title = String(args.title ?? "").replace(/"/g, "");
  const body = String(args.body ?? "").replace(/"/g, "");
  await runPS(
    `[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType=WindowsRuntime] > $null; $t=[Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent([Windows.UI.Notifications.ToastTemplateType]::ToastText02); $ns=$t.GetElementsByTagName("text"); $ns.Item(0).AppendChild($t.CreateTextNode("${title}")) > $null; $ns.Item(1).AppendChild($t.CreateTextNode("${body}")) > $null; $n=[Windows.UI.Notifications.ToastNotification]::new($t); [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier("11 Agent").Show($n)`,
    10_000,
  );
  return { notified: { title, body } };
}

// ─── Dispatch ───────────────────────────────────────────────────────────────

const VM: Record<string, (args: any) => Promise<unknown>> = {
  "device.fs_list": fsList,
  "device.fs_read": fsRead,
  "device.fs_write": fsWrite,
  "device.fs_delete": fsDelete,
  "device.fs_copy": fsCopy,
  "device.fs_move": fsMove,
  "device.exec": exec,
  "device.media_list": mediaList,
  "device.media_open": mediaOpen,
  "device.media_import": mediaImport,
  "device.apps_list": appsList,
  "device.apps_launch": appsLaunch,
  "device.settings_get": settingsGet,
  "device.settings_set": settingsSet,
  "device.screen_shot": screenShot,
  "device.system_info": systemInfo,
  "device.system_battery": systemBattery,
  "device.system_processes": systemProcesses,
  "device.system_network": systemNetwork,
  "device.system_clipboard": systemClipboard,
  "device.system_notify": systemNotify,
};

export function isDeviceTool(name: string): boolean {
  return name.startsWith("device.") && name in VM;
}

export async function executeDeviceTool(
  name: string,
  args: Record<string, unknown>,
): Promise<{ result: unknown }> {
  const fn = VM[name];
  if (!fn) throw new Error(`Tool de dispositivo desconhecida: ${name}`);
  const result = await fn(args ?? {});
  return { result };
}

export function listDeviceTools(): string[] {
  return Object.keys(VM);
}

// utilitário exportado para logs/debug
export { basename, extname, jsonOut, lastErr, runPS };
