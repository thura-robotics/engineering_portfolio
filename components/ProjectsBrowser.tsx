"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, LayoutGrid, Rows3 } from "lucide-react";
import { projects, type Project } from "@/lib/data";

const categories = [
  {
    id: "Robotics & Embedded" as const,
    label: "Robotics & Embedded Projects",
    description: "Autonomous systems, mechanical design, embedded firmware, PCB, and hardware-software integration.",
  },
  {
    id: "AI & Computer Vision" as const,
    label: "AI & Computer Vision Projects",
    description: "Machine learning, deep learning, TinyML, reinforcement learning, and visual intelligence applications.",
  },
];

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

/** Derive a sortable key from a period string, using the END of any range.
 *  e.g. "Jun 2025 – Mar 2026" -> 202603, "2024" -> 202412, "2022 – 2023" -> 202312 */
function periodKey(period: string): number {
  const end = period.split(/[–-]/).pop() ?? period;
  const year = end.match(/\d{4}/);
  const month = end.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);
  const y = year ? parseInt(year[0], 10) : 0;
  const m = month ? MONTHS[month[0]] : 12;
  return y * 100 + m;
}

function sortByRecency(list: Project[]): Project[] {
  return [...list].sort((a, b) => periodKey(b.period) - periodKey(a.period));
}

/** Blurred-fill thumbnail used by both views. */
function Thumb({ project, className, style }: { project: Project; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface-2)",
        ...style,
      }}
    >
      {project.heroImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt=""
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(18px) brightness(0.45) saturate(1.1)", transform: "scale(1.15)" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        </>
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "0.75rem", opacity: 0.5, background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)" }}>
          Photo coming soon
        </div>
      )}
    </div>
  );
}

function IconCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none" }}>
      <div className="card" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
        <Thumb project={project} style={{ height: "160px", borderBottom: "1px solid var(--border)", flexShrink: 0 }} />
        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
            {project.title}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.75rem" }}>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{project.period}</span>
            <span style={{ fontSize: "0.8rem", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              Details <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function TileCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none" }}>
      <div className="card tile-card" style={{ overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "190px" }}>
        {/* Text — left */}
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.35 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "0.85rem" }}>
            {project.shortDescription}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.85rem" }}>
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{project.period}</span>
            <span style={{ fontSize: "0.8rem", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
              Details <ArrowRight size={12} />
            </span>
          </div>
        </div>
        {/* Hero image — right */}
        <Thumb project={project} className="tile-thumb" style={{ borderLeft: "1px solid var(--border)" }} />
      </div>
    </Link>
  );
}

export default function ProjectsBrowser() {
  const [view, setView] = useState<"icon" | "tiles">("icon");

  useEffect(() => {
    const saved = localStorage.getItem("projView");
    if (saved === "tiles" || saved === "icon") setView(saved);
  }, []);

  const change = (v: "icon" | "tiles") => {
    setView(v);
    try { localStorage.setItem("projView", v); } catch {}
  };

  const btnStyle = (active: boolean): React.CSSProperties => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    padding: "0.45rem 0.8rem",
    fontSize: "0.8rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "0.4rem",
    cursor: "pointer",
    background: active ? "var(--primary)" : "transparent",
    color: active ? "var(--bg)" : "var(--text-muted)",
    transition: "background 0.18s, color 0.18s",
  });

  return (
    <>
      {/* View toggle */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.25rem", border: "1px solid var(--border)", borderRadius: "0.55rem", background: "var(--surface)" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", padding: "0 0.5rem" }}>View</span>
          <button type="button" onClick={() => change("icon")} style={btnStyle(view === "icon")} aria-pressed={view === "icon"}>
            <LayoutGrid size={15} /> Large Icons
          </button>
          <button type="button" onClick={() => change("tiles")} style={btnStyle(view === "tiles")} aria-pressed={view === "tiles"}>
            <Rows3 size={15} /> Tiles
          </button>
        </div>
      </div>

      {categories.map((cat) => {
        const catProjects = sortByRecency(projects.filter((p) => p.portfolioCategory === cat.id));
        return (
          <div key={cat.id} style={{ marginBottom: "4rem" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem" }}>{cat.label}</h2>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{cat.description}</p>
              <div style={{ width: "48px", height: "3px", background: "var(--primary)", borderRadius: "2px", marginTop: "0.75rem" }} />
            </div>

            {view === "icon" ? (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {catProjects.map((p) => <IconCard key={p.slug} project={p} />)}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {catProjects.map((p) => <TileCard key={p.slug} project={p} />)}
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        @media (max-width: 600px) {
          .tile-card { grid-template-columns: 1fr !important; }
          .tile-card .tile-thumb { height: 200px !important; border-left: none !important; border-top: 1px solid var(--border) !important; }
        }
      `}</style>
    </>
  );
}
