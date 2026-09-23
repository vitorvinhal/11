import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { DEVICE_BRIDGE_SOURCE } from "./src/utils/device-bridge";

// Offline-first: UI empacotada localmente no app. Sem redirect para URL remota.
// Dados dinâmicos (agente, jobs, APIs) vão à rede quando houver conexão;
// sem internet, o shell local renderiza e erros são tratados.
const OFFLINE_SHELL_HTML = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="theme-color" content="#030309" />
<title>11 — Mobile</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html,body { height: 100%; }
  body { background:#030309; color:#e2e8f0; font-family:system-ui,-apple-system,"Segoe UI",sans-serif;
    display:flex; flex-direction:column; padding: env(safe-area-inset-top) 16px env(safe-area-inset-bottom); }
  header { padding:18px 0 14px; border-bottom:1px solid #1e293b; }
  header h1 { font-size:17px; letter-spacing:2px; color:#7dd3fc; text-transform:uppercase; }
  header p { font-size:12px; color:#94a3b8; margin-top:4px; }
  main { flex:1; overflow-y:auto; padding:16px 0; }
  .card { background:#0f172a; border:1px solid #1e293b; border-radius:14px; padding:16px; margin-bottom:12px; }
  .card h2 { font-size:14px; color:#7dd3fc; margin-bottom:8px; }
  .row { display:flex; justify-content:space-between; padding:6px 0; font-size:13px; color:#94a3b8; }
  .badge { padding:3px 10px; border-radius:999px; font-size:11px; font-weight:600; }
  .ok { background:#052e16; color:#4ade80; }
  .err { background:#450a0a; color:#f87171; }
  .warn { background:#451a03; color:#fbbf24; }
  ul { list-style:none; margin-top:4px; }
  ul li { padding:6px 0; border-bottom:1px dashed #1e293b; font-size:12.5px; color:#cbd5e1; }
  ul li:last-child { border-bottom:none; }
  .muted { color:#475569; font-size:11.5px; text-align:center; }
</style>
</head>
<body>
<header><h1>11 — Mobile</h1><p id="sub">Shell local offline-first</p></header>
<main>
  <div class="card">
    <h2>Status</h2>
    <div class="row"><span>Device Bridge</span><span id="bridge" class="badge warn">verificando…</span></div>
    <div class="row"><span>Rede</span><span id="net" class="badge warn">verificando…</span></div>
  </div>
  <div class="card"><h2>Ferramentas nativas</h2><ul id="tools"><li class="muted">Carregando…</li></ul></div>
  <div class="card">
    <h2>Modo offline</h2>
    <p style="font-size:13px;color:#cbd5e1;line-height:1.5">UI local funciona sem internet.
    Dados dinâmicos (agente, jobs, APIs) exigem rede — erros são tratados aqui.</p>
  </div>
</main>
<script>
(function(){
  function $(id){return document.getElementById(id);}
  function badge(id,txt,cls){var el=$(id);el.textContent=txt;el.className="badge "+cls;}
  var db=window.DeviceBridge;
  if(db&&db.listTools){
    badge("bridge","OK","ok");
    var tools=db.listTools()||[];
    var msg=tools.length?tools.map(function(t){return "<li>"+t+"</li>";}).join(""):'<li class="muted">sem tools</li>';
    $("#tools").innerHTML=msg;
  } else {
    badge("bridge","não injetado","err");
    $("#tools").innerHTML='<li class="muted">device-bridge indisponível neste runtime</li>';
  }
  function onNet(){badge("net",navigator.onLine?"online":"offline",navigator.onLine?"ok":"err");}
  onNet();window.addEventListener("online",onNet);window.addEventListener("offline",onNet);
})();
</script>
</body>
</html>`;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030309" }}>
      <StatusBar barStyle="light-content" />
      {Platform.OS !== "web" && (
        <WebView
          source={{ html: OFFLINE_SHELL_HTML }}
          style={{ flex: 1, backgroundColor: "#030309" }}
          setSupportMultipleWindows={false}
          allowsInlineMediaPlayback
          allowsBackForwardNavigationGestures
          originWhitelist={["*"]}
          injectedJavaScriptBeforeContentLoaded={DEVICE_BRIDGE_SOURCE}
        />
      )}
    </SafeAreaView>
  );
}
