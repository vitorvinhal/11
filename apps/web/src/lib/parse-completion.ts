/**
 * Extrai o texto de uma resposta OpenAI-compatível. Aceita JSON puro
 * ({ choices[].message.content }) ou SSE streaming ({ data: {...}\n\ndata: {...} })
 * — alguns providers/combos do 9Router retornam SSE mesmo com stream:false.
 */
export function parseCompletionContent(body: string): string | null {
  if (!body) return null;

  // SSE: linhas começam com "data: " — detecta por formato, não por substring
  const lines = body.split(/\r?\n/);
  const hasSSELines = lines.some((l) => /^data:\s*\{/.test(l));
  if (hasSSELines) {
    let out = "";
    for (const line of lines) {
      const m = line.match(/^data:\s*(.*)$/);
      if (!m || m[1] === "[DONE]") continue;
      try {
        const chunk = JSON.parse(m[1]);
        const delta =
          chunk.choices?.[0]?.delta?.content ??
          chunk.choices?.[0]?.message?.content ??
          "";
        if (typeof delta === "string") out += delta;
      } catch {
        /* chunk não-JSON */
      }
    }
    return out || null;
  }

  // JSON puro
  try {
    const data = JSON.parse(body) as any;
    const text =
      data.choices?.[0]?.message?.content ??
      data.choices?.[0]?.delta?.content ??
      data.output_text ??
      "";
    return typeof text === "string" && text ? text : null;
  } catch {
    return null;
  }
}
