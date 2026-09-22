"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  KeyRound,
  Save,
  CheckCircle,
  XCircle,
  List,
  Bot,
} from "lucide-react";
import {
  getZenConfig,
  saveZenConfig,
  chatOpenAICompat,
  listOpenAIModels,
} from "../lib/local-llm";

const DEFAULT_BASE = "http://localhost:11434";

export default function ZenPanel() {
  const [baseUrl, setBaseUrl] = useState("");
  const [model, setModel] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testMsg, setTestMsg] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const [models, setModels] = useState<string[]>([]);
  const [listing, setListing] = useState(false);
  const [listMsg, setListMsg] = useState<string | null>(null);

  useEffect(() => {
    const cfg = getZenConfig();
    setBaseUrl(cfg.baseUrl || DEFAULT_BASE);
    setModel(cfg.model);
    setApiKey(cfg.apiKey ?? "");
  }, []);

  const handleSave = () => {
    saveZenConfig({
      baseUrl: baseUrl.trim() || DEFAULT_BASE,
      model: model.trim(),
      apiKey,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const useOllama = () => {
    setBaseUrl(DEFAULT_BASE);
    saveZenConfig({ baseUrl: DEFAULT_BASE, model: model.trim(), apiKey });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
    void handleList();
  };

  const handleList = async () => {
    setListing(true);
    setListMsg(null);
    const base = baseUrl.trim() || DEFAULT_BASE;
    const r = await listOpenAIModels({
      baseUrl: base,
      model: model.trim() || "x",
      apiKey: apiKey || undefined,
    });
    if (r.ok) {
      setModels(r.models);
      setListMsg(
        r.models.length
          ? `${r.models.length} modelos encontrados`
          : "Nenhum modelo retornado",
      );
      if (r.models.length === 1 && !model) setModel(r.models[0]);
    } else {
      setListMsg(`Erro: ${r.error ?? "falha ao listar"}`);
    }
    setListing(false);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestMsg(null);
    try {
      const r = await chatOpenAICompat(
        {
          baseUrl: baseUrl.trim() || DEFAULT_BASE,
          model: model.trim(),
          apiKey: apiKey || undefined,
        },
        [{ role: "user", content: "Responda apenas: ok" }],
      );
      setTestMsg({
        ok: true,
        text: `Conectado — modelo respondeu: ${r.text.slice(0, 80)}`,
      });
    } catch (e) {
      setTestMsg({ ok: false, text: (e as Error).message });
    }
    setTesting(false);
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="mb-1 block text-[11px] text-text-muted">
          Base URL (OpenAI-compatível)
        </label>
        <input
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
          placeholder="http://localhost:11434   ou   https://zen.seudominio/v1"
          className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 font-mono text-xs text-text-primary outline-none focus:border-primary/30 transition"
        />
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="mb-1 block text-[11px] text-text-muted">
            Modelo
          </label>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="llama3.2"
            className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 font-mono text-xs text-text-primary outline-none focus:border-primary/30 transition"
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 block text-[11px] text-text-muted">
            API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="opcional"
            className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 font-mono text-xs text-text-primary outline-none focus:border-primary/30 transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] transition"
        >
          {saved ? (
            <CheckCircle className="h-3 w-3 text-emerald-400" />
          ) : (
            <Save className="h-3 w-3" />
          )}
          {saved ? "Salvo ✓" : "Salvar"}
        </button>
        <button
          onClick={useOllama}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1.5 text-[11px] text-white/60 hover:bg-white/[0.1] transition"
        >
          <Bot className="h-3 w-3" />
          Usar Ollama local
        </button>
        <button
          onClick={handleTest}
          disabled={testing || !baseUrl.trim() || !model.trim()}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-1.5 text-[11px] text-primary hover:bg-primary/30 transition disabled:opacity-40"
        >
          {testing ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <KeyRound className="h-3 w-3" />
          )}
          Testar conexão
        </button>
        <button
          onClick={handleList}
          disabled={listing || !baseUrl.trim()}
          className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] transition disabled:opacity-40"
        >
          {listing ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : (
            <List className="h-3 w-3" />
          )}
          Listar modelos
        </button>
      </div>

      {listMsg && (
        <p
          className={`text-[10px] ${listMsg.startsWith("Erro") ? "text-red-400" : "text-emerald-400"}`}
        >
          {listMsg}
        </p>
      )}

      {models.length > 0 && (
        <div className="max-h-40 space-y-1 overflow-y-auto rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
          {models.map((m) => (
            <button
              key={m}
              onClick={() => {
                setModel(m);
                saveZenConfig({
                  baseUrl: baseUrl.trim(),
                  model: m.trim(),
                  apiKey: apiKey || undefined,
                });
                setSaved(true);
                setTimeout(() => setSaved(false), 1500);
              }}
              className={`w-full rounded-md px-2 py-1.5 text-left text-[11px] transition ${
                model === m
                  ? "bg-primary/20 text-primary"
                  : "text-white/60 hover:bg-white/[0.06] hover:text-white/85"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      {testMsg && (
        <p
          className={`flex items-start gap-1.5 text-[10px] ${testMsg.ok ? "text-emerald-400" : "text-red-400"}`}
        >
          {testMsg.ok ? (
            <CheckCircle className="mt-0.5 h-3 w-3 shrink-0" />
          ) : (
            <XCircle className="mt-0.5 h-3 w-3 shrink-0" />
          )}
          <span className="break-all">{testMsg.text}</span>
        </p>
      )}

      <p className="text-[10px] text-white/25">
        Qualquer API OpenAI-compatível (Ollama local, Zen, vLLM, LM Studio…).
        Config fica no navegador (localStorage).
      </p>
    </div>
  );
}
