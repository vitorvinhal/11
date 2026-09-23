/**
 * Skills Discover API — busca externa via GitHub
 *
 * GET /api/skills/discover?q=<query>&source=<github|all>
 *
 * Busca repositórios GitHub com topics relevantes (claude-skill, ai-skill, etc)
 * e normaliza para o formato SkillCatalogItem.
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../lib/auth-helpers";

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

interface DiscoverSkill {
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

const GITHUB_TOPICS = [
  "claude-skill",
  "ai-skill",
  "prompt-engineering",
  "mcp-server",
  "llm-tool",
  "ai-agent",
  "chatgpt-plugin",
  "anthropic",
  "openai",
];

const CATEGORY_MAP: Record<string, string> = {
  "claude-skill": "Claude",
  "ai-skill": "AI",
  "prompt-engineering": "Prompting",
  "mcp-server": "MCP",
  "llm-tool": "Tools",
  "ai-agent": "Agents",
  "chatgpt-plugin": "ChatGPT",
  anthropic: "Claude",
  openai: "OpenAI",
};

const ICON_MAP: Record<string, string> = {
  claude: "🧠",
  ai: "🤖",
  prompt: "✏️",
  mcp: "🔌",
  llm: "💬",
  agent: "🖥️",
  chatgpt: "💬",
  tool: "🛠️",
  default: "⚡",
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

function normalizeRepo(repo: GitHubRepo): DiscoverSkill {
  return {
    id: `gh-${repo.id}`,
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

async function searchGitHub(query: string): Promise<DiscoverSkill[]> {
  const topics = query.trim()
    ? `${query}+topic:claude-skill+topic:ai-skill+topic:mcp-server`
    : "topic:claude-skill+topic:ai-skill+topic:mcp-server+topic:llm-tool";

  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(topics)}&sort=stars&order=desc&per_page=30`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.v3+json",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    next: { revalidate: 300 }, // cache 5min
  });

  if (!res.ok) {
    console.error(`[skills/discover] GitHub API ${res.status}`);
    return [];
  }

  const data = await res.json();
  return (data.items ?? []).map(normalizeRepo);
}

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") ?? "";
    const source = searchParams.get("source") ?? "github";

    let results: DiscoverSkill[] = [];

    if (source === "github" || source === "all") {
      const githubResults = await searchGitHub(q);
      results = [...results, ...githubResults];
    }

    // Deduplicate by name
    const seen = new Set<string>();
    const unique = results.filter((r) => {
      const key = r.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return NextResponse.json({
      skills: unique,
      total: unique.length,
      source,
      query: q,
    });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message, skills: [] },
      { status: 500 },
    );
  }
}
