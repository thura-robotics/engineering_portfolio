import React from "react";

/**
 * Renders a string with **bold** segments emphasised — used to make the
 * keywords recruiters scan for (technologies, metrics, credentials) stand out
 * without bolding entire sentences.
 */
export function renderRich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
    seg.startsWith("**") && seg.endsWith("**") ? (
      <strong key={i} style={{ color: "var(--text)", fontWeight: 700 }}>
        {seg.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{seg}</React.Fragment>
    )
  );
}
