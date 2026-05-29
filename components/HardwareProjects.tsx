"use client";

import { hardwareProjects } from "@/lib/data";
import { ExternalLink, Cpu } from "lucide-react";

export default function HardwareProjects() {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={{ marginBottom: "1.75rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem" }}>
          Hardware Design Projects
        </h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
          PCB designs and hardware projects with interactive KiCad viewers hosted on GitHub Pages.
          Add a new design to{" "}
          <a
            href="https://thura-robotics.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--primary)", textDecoration: "none" }}
          >
            thura-robotics.github.io
          </a>
          {" "}and add one entry to <code style={{ fontSize: "0.8rem", background: "var(--surface-2)", padding: "0.1rem 0.4rem", borderRadius: "0.25rem", color: "var(--primary)" }}>lib/data.ts</code> to list it here.
        </p>
        <div style={{ width: "48px", height: "3px", background: "var(--primary)", borderRadius: "2px", marginTop: "0.75rem" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {hardwareProjects.map((project, i) => (
          <div
            key={i}
            className="card"
            style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Icon + title row */}
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <div
                style={{
                  flexShrink: 0,
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.5rem",
                  background: "rgba(56,189,248,0.1)",
                  border: "1px solid rgba(56,189,248,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                }}
              >
                <Cpu size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.2rem" }}>
                  {project.title}
                </h3>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{project.year}</span>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.855rem", color: "var(--text-muted)", lineHeight: 1.75, flex: 1 }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {project.tools.map((tool) => (
                <span key={tool} className="tag">{tool}</span>
              ))}
            </div>

            {/* Open Viewer button */}
            <a
              href={project.viewerUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                padding: "0.55rem 1rem",
                borderRadius: "0.4rem",
                border: "1px solid var(--primary)",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "background 0.15s, color 0.15s",
                marginTop: "0.25rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--primary)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "var(--primary)";
              }}
            >
              <ExternalLink size={14} /> Open PCB Viewer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
