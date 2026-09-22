"use client";

/**
 * ReleaseNotes — changelog limpo e estruturado para usuário comum.
 * Formata cada item da versão: se começa com "Título: texto", destaca o título.
 */

export function ReleaseNotes({
  version,
  changelog,
  compact,
}: {
  version?: string;
  changelog?: string[];
  compact?: boolean;
}) {
  const items = changelog ?? [];
  if (items.length === 0) {
    return (
      <p className="text-[11px] text-white/35">
        Sem novidades nesta versão ainda.
      </p>
    );
  }

  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      {version != null && (
        <p className="text-[10px] font-semibold uppercase tracking-wider text-primary/80">
          v{version}
        </p>
      )}
      <ul className={`space-y-1.5 ${compact ? "" : ""}`}>
        {items.map((item, i) => {
          const [title, ...rest] = item.split(/:\s*/);
          const desc = rest.join(": ");
          return (
            <li
              key={i}
              className={`flex gap-2 leading-relaxed ${compact ? "text-[11px]" : "text-[12px]"} text-white/70`}
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/70" />
              <span>
                {desc && title ? (
                  <>
                    <strong className="font-semibold text-white/90">
                      {title}
                    </strong>
                    : {desc}
                  </>
                ) : (
                  <>{item}</>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
