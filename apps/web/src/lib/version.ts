export interface VersionInfo {
  version: string;
  name: string;
  channel: string;
  changelog: string[];
  apkUrl?: string;
  desktopUrl?: string;
}

export interface ParsedVersion {
  version: string;
  channel: string;
  name: string;
  changelog: string[];
}

export function parseVersionPayload(raw: any): ParsedVersion {
  if (!raw || typeof raw !== "object") {
    return { version: "0.0.0", channel: "stable", name: "11", changelog: [] };
  }

  const version = typeof raw.version === "string" ? raw.version : "0.0.0";
  const channel = typeof raw.channel === "string" ? raw.channel : "stable";
  const name = typeof raw.name === "string" ? raw.name : "11";

  let changelog: string[] = [];
  if (Array.isArray(raw.changelog)) {
    changelog = raw.changelog.filter((item: any) => typeof item === "string");
  } else if (typeof raw.changelog === "string") {
    changelog = raw.changelog
      .split("\n")
      .map((line: string) => line.trim())
      .filter(Boolean);
  }

  return { version, channel, name, changelog };
}
