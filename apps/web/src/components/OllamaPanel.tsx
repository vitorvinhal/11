"use client";

import { useState, useEffect } from "react";
import { Loader2, Wifi, WifiOff, RefreshCw } from "lucide-react";
import { testOllama } from "../lib/local-llm";

interface OllamaModel {
  name: string;
  size: number;
}

export default function OllamaPanel() {
  const [endpoint, setEndpoint] = useState("http://localhost:11434");
  const [connected, setConnected] = useState(false);
  const [models, setModels] = useState<OllamaModel[]>([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [testing, setTesting] = useState(false);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    const data = await testOllama(endpoint);
    setConnected(data.ok === true);
    if (data.models) {
      setModels(data.models);
      if (data.models.length > 0 && !selectedModel) {
        setSelectedModel(data.models[0].name);
      }
    }
    setTesting(false);
  };

  const refreshModels = async () => {
    setLoading(true);
    const data = await testOllama(endpoint);
    if (data.models) setModels(data.models);
    setLoading(false);
  };

  useEffect(() => {
    // Carregar config salva
    try {
      const saved = localStorage.getItem("ollama_config");
      if (saved) {
        const cfg = JSON.parse(saved);
        if (cfg.endpoint) setEndpoint(cfg.endpoint);
        if (cfg.selectedModel) setSelectedModel(cfg.selectedModel);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    // Salvar config
    localStorage.setItem(
      "ollama_config",
      JSON.stringify({ endpoint, selectedModel }),
    );
  }, [endpoint, selectedModel]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/50">Endpoint:</span>
        <input
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/80 outline-none focus:border-primary/40"
          placeholder="http://localhost:11434"
        />
        <button
          onClick={testConnection}
          disabled={testing}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-1.5 text-[11px] text-primary hover:bg-primary/30 transition disabled:opacity-50"
        >
          {testing ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <Wifi className="h-3 w-3" />
          )}
          Testar
        </button>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          {connected ? (
            <Wifi className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <WifiOff className="h-3.5 w-3.5 text-red-400" />
          )}
          <span className="text-[11px] text-white/50">
            {connected ? "Conectado" : "Desconectado"}
          </span>
        </div>
        <div className="flex-1" />
        {models.length > 0 && (
          <button
            onClick={refreshModels}
            disabled={loading}
            className="text-[10px] text-white/30 hover:text-white/60 transition"
          >
            <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
          </button>
        )}
      </div>

      {models.length > 0 && (
        <div>
          <span className="text-[11px] text-white/40">
            Modelos disponíveis ({models.length}):
          </span>
          <div className="mt-2 max-h-40 space-y-1 overflow-y-auto">
            {models.map((m) => (
              <button
                key={m.name}
                onClick={() => setSelectedModel(m.name)}
                className={`w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                  selectedModel === m.name
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-white/[0.03] text-white/60 border border-transparent hover:bg-white/[0.06]"
                }`}
              >
                <span className="font-medium">{m.name}</span>
                <span className="ml-2 text-[10px] text-white/30">
                  {(m.size / 1e9).toFixed(1)}GB
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {!connected && models.length === 0 && (
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center">
          <p className="text-[11px] text-white/30">
            Instale o Ollama para usar modelos locais offline.
          </p>
          <p className="mt-1 text-[10px] text-white/20">
            Em site https, libere o CORS no Ollama:{" "}
            <code className="text-white/40">OLLAMA_ORIGINS=&quot;*&quot;</code>
          </p>
          <a
            href="https://ollama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[11px] text-primary/80 hover:text-primary transition"
          >
            ollama.com
          </a>
        </div>
      )}
    </div>
  );
}
