/**
 * Plugins Discover API — busca externa via GitHub
 *
 * GET /api/plugins/discover?q=<query>&source=<github|all>
 *
 * Busca repositórios GitHub com topics de plugins MCP, Claude, ChatGPT
 * e normaliza para o formato de plugin.
 */

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics: string[];
  owner: { login: string; avatar_url: string };
  created_at: string;
  updated_at: string;
}

interface DiscoverPlugin {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  source: "github";
  url: string;
  stars: number;
  author: string;
  tags: string[];
  installed: boolean;
}

const PLUGIN_TOPICS = [
  "mcp-server",
  "model-context-protocol",
  "claude-plugin",
  "chatgpt-plugin",
  "openai-plugin",
  "ai-tool",
  "llm-agent",
  "anthropic",
  "cursor-plugin",
  "vscode-extension",
];

const CATEGORY_MAP: Record<string, string> = {
  "mcp-server": "MCP",
  "model-context-protocol": "MCP",
  "claude-plugin": "Claude",
  "chatgpt-plugin": "ChatGPT",
  "openai-plugin": "OpenAI",
  "ai-tool": "Tools",
  "llm-agent": "Agents",
  anthropic: "Claude",
  "cursor-plugin": "IDE",
  "vscode-extension": "IDE",
};

const ICON_MAP: Record<string, string> = {
  mcp: "🔌",
  claude: "🧠",
  chatgpt: "💬",
  openai: "💬",
  tool: "🛠️",
  agent: "🖥️",
  cursor: "📝",
  vscode: "📝",
  default: "📦",
};

function pickIcon(topics: string[], name: string): string {
  const joined = [...topics, name].join(" ").toLowerCase();
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (joined.includes(key)) return icon;
  }
  return ICON_MAP.default;
}

function pickCategory(topics: string[]): string {
  for (const topic of topics) {
    if (CATEGORY_MAP[topic]) return CATEGORY_MAP[topic];
  }
  return "Outros";
}

function normalizeRepo(repo: GitHubRepo): DiscoverPlugin {
  return {
    id: `gh-plugin-${repo.id}`,
    name: repo.name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    description: repo.description || "Sem descrição",
    icon: pickIcon(repo.topics, repo.name),
    category: pickCategory(repo.topics),
    source: "github",
    url: repo.html_url,
    stars: repo.stargazers_count,
    author: repo.owner.login,
    tags: repo.topics.slice(0, 5),
    installed: false,
  };
}

async function searchGitHub(query: string): Promise<DiscoverPlugin[]> {
  const topics = query.trim()
    ? `${query}+topic:mcp-server+topic:ai-tool`
    : "topic:mcp-server+topic:model-context-protocol+topic:ai-tool+topic:llm-agent";

  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(topics)}&sort=stars&order=desc&per_page=30`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.error(`[plugins/discover] GitHub API ${res.status}`);
    return [];
  }

  const data = await res.json();
  return (data.items ?? []).map(normalizeRepo);
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") ?? "";
    const source = searchParams.get("source") ?? "github";

    let results: DiscoverPlugin[] = [];

    if (source === "github" || source === "all") {
      const githubResults = await searchGitHub(q);
      results = [...results, ...githubResults];
    }

    const seen = new Set<string>();
    const unique = results.filter((r) => {
      const key = r.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json({
      plugins: unique,
      total: unique.length,
      source,
      query: q,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message, plugins: [] },
      { status: 500 },
    );
  }
}
