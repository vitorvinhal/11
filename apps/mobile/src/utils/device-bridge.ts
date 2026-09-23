/**
 * Device Bridge (Mobile) — script injetado no WebView (Capacitor).
 *
 * Expõe `window.DeviceBridge` no site (Vercel) para executar tools `device.*`
 * via plugins nativos do Capacitor. Usa `window.Capacitor.Plugins` (runtime),
 * sem imports de bundler — o bridge roda diretamente no WebView.
 */

export const DEVICE_BRIDGE_SOURCE = `(function () {\n  function waitCapacitor(cb){if(window.Capacitor && window.Capacitor.Plugins){cb();}else{setTimeout(()=>waitCapacitor(cb),50);}}\n  waitCapacitor(()=>{
  if (window.__DEVICE_BRIDGE_LOADED__) return;
  window.__DEVICE_BRIDGE_LOADED__ = true;

    // Wait for Capacitor runtime loaded before using plugins\n  function waitCapacitor(cb){if(window.Capacitor && window.Capacitor.Plugins){cb();}else{setTimeout(()=>waitCapacitor(cb),50);}}\n  waitCapacitor(() => {
    function cap(name) {
  }

  function fail(msg) {
    return { ok: false, error: String(msg) };
  }

  async function fsList(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    var r = await p.readdir({ path: String(args.path || ''), directory: directory });
    return { ok: true, entries: r.files || [] };
  }

  async function fsRead(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    var r = await p.readFile({
      path: String(args.path || ''),
      directory: directory,
      encoding: 'utf8',
    });
    return { ok: true, data: r.data };
  }

  async function fsWrite(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    var r = await p.writeFile({
      path: String(args.path || ''),
      directory: directory,
      data: String(args.content || ''),
      encoding: 'utf8',
      recursive: true,
    });
    return { ok: true, uri: r.uri };
  }

  async function fsDelete(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    await p.delete({ path: String(args.path), directory: directory });
    return { ok: true, deleted: args.path };
  }

  async function fsCopy(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    await p.copy({
      from: String(args.source),
      to: String(args.destination),
      directory: directory,
    });
    return { ok: true, to: args.destination };
  }

  async function fsMove(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    await p.rename({
      from: String(args.source),
      to: String(args.destination),
      directory: directory,
    });
    return { ok: true, to: args.destination };
  }

  function resolveDir(d) {
    var dirs = {
      documents: 'DOCUMENTS',
      data: 'DATA',
      external: 'EXTERNAL_STORAGE',
      pictures: 'PICTURES',
      cache: 'CACHE',
    };
    return dirs[String(d || 'documents').toLowerCase()] || 'DOCUMENTS';
  }

  async function mediaImport(args) {
    var camera = cap('Camera');
    if (!camera) return fail('Plugin Camera indisponível');
    var source = String(args.from || 'galeria') === 'camera' ? 'CAMERA' : 'PHOTOS';
    var r = await camera.getPhoto({
      resultType: 'base64',
      source: source,
      quality: 80,
      saveToGallery: false,
    });
    return { ok: true, base64: r.base64String, format: r.format };
  }

  async function mediaList() {
    return fail('Lista de fotos da galeria requer plugin de mídia (não publicado no npm). Use device.media_import.');
  }

  async function mediaOpen(args) {
    var p = cap('Filesystem');
    if (!p) return fail('Plugin Filesystem indisponível');
    var directory = resolveDir(args.directory);
    var r = await p.getUri({ path: String(args.path), directory: directory });
    return { ok: true, uri: r.uri };
  }

  async function appsList() {
    return {
      ok: true,
      apps: [],
      note: 'Lista de apps instalados exige permissão nativa (intents). Não suportado nesta versão mobile.',
    };
  }

  async function appsLaunch(args) {
    return fail('Abertura de apps arbitrária não suportada no mobile nesta versão. Use device.media_open para abrir arquivos.');
  }

  async function settingsGet(args) {
    var device = cap('Device');
    if (!device) return fail('Plugin Device indisponível');
    var info = await device.getInfo();
    return { ok: true, key: args.key, value: info };
  }

  async function settingsSet() {
    return fail('Alteração de configurações do sistema não suportada no mobile nesta versão.');
  }

  async function screenShot() {
    return fail('Captura de tela mobile requer MediaProjection (Android) / API restrita (iOS). Não suportado nesta versão.');
  }

  async function systemInfo() {
    var device = cap('Device');
    if (!device) return fail('Plugin Device indisponível');
    var info = await device.getInfo();
    var battery = await device.getBatteryInfo().catch(function () { return {}; });
    return { ok: true, info: info, battery: battery };
  }

  async function systemBattery() {
    var device = cap('Device');
    if (!device) return fail('Plugin Device indisponível');
    var b = await device.getBatteryInfo();
    return { ok: true, battery: b };
  }

  async function systemProcesses() {
    return fail('Lista de processos exige permissão nativa. Não suportado nesta versão mobile.');
  }

  async function systemNetwork() {
    var net = cap('Network');
    if (!net) return fail('Plugin Network indisponível');
    var s = await net.getStatus();
    return { ok: true, network: s };
  }

  async function systemClipboard(args) {
    var cb = cap('Clipboard');
    if (!cb) return fail('Plugin Clipboard indisponível');
    if (String(args.action || 'read') === 'write') {
      await cb.write({ string: String(args.value || '') });
      return { ok: true, action: 'write' };
    }
    var r = await cb.read();
    return { ok: true, action: 'read', value: r.value };
  }

  async function systemNotify(args) {
    var ln = cap('LocalNotifications');
    if (!ln) return fail('Plugin LocalNotifications indisponível');
    var perm = await ln.requestPermissions().catch(function () { return null; });
    if (perm && perm.display === 'denied') return fail('Permissão de notificação negada');
    await ln.schedule({
      notifications: [
        { id: Math.floor(Date.now() / 1000), title: String(args.title || ''), body: String(args.body || '') },
      ],
    });
    return { ok: true, notified: true };
  }

  async function exec() {
    return fail('Terminal/exec não disponível no mobile (require sandbox). Use tools de arquivos.');
  }

  var HANDLERS = {
    'device.fs_list': fsList,
    'device.fs_read': fsRead,
    'device.fs_write': fsWrite,
    'device.fs_delete': fsDelete,
    'device.fs_copy': fsCopy,
    'device.fs_move': fsMove,
    'device.exec': exec,
    'device.media_list': mediaList,
    'device.media_import': mediaImport,
    'device.media_open': mediaOpen,
    'device.apps_list': appsList,
    'device.apps_launch': appsLaunch,
    'device.settings_get': settingsGet,
    'device.settings_set': settingsSet,
    'device.screen_shot': screenShot,
    'device.system_info': systemInfo,
    'device.system_battery': systemBattery,
    'device.system_processes': systemProcesses,
    'device.system_network': systemNetwork,
    'device.system_clipboard': systemClipboard,
    'device.system_notify': systemNotify,
  };

  window.DeviceBridge = {
    // Executa uma tool; devolve {ok:true,...} ou {ok:false,error}.
    async execute(name, args) {
      var handler = HANDLERS[name];
      if (!handler) return { ok: false, error: 'Tool desconhecida: ' + name };
      try {
        return await handler(args || {});
      } catch (e) {
        return fail(e && e.message ? e.message : String(e));
      }
    },
    listTools() {
      return Object.keys(HANDLERS);
    },
    ping() {
      return {
        platform: 'mobile-app',
        hasCapacitor: !!window.Capacitor,
        plugins: window.Capacitor && window.Capacitor.Plugins
          ? Object.keys(window.Capacitor.Plugins)
          : [],
        tools: Object.keys(HANDLERS),
      };
    },
  };

  window.dispatchEvent(new CustomEvent('devicebridge-ready'));
})();`;

/** Types do bridge exposto no WebView (usado pelo web app via window). */
export interface DeviceBridgeSurface {
  execute(
    name: string,
    args: Record<string, unknown>,
  ): Promise<{ ok: boolean; error?: string; [k: string]: unknown }>;
  listTools(): string[];
  ping(): Record<string, unknown>;
}

declare global {
  interface Window {
    DeviceBridge?: DeviceBridgeSurface;
  }
}

// noop: o script é injectado no WebView (App.tsx), não importado em runtime RN.
export const __NOOP = true;
