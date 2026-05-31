import { theses } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Thesis() {
  return (
    <section id="research" className="section section-alt">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Research</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {theses.map((thesis, i) => (
            <div key={i} className="card" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    borderRadius: "0.5rem",
                    background: "rgba(34,211,238,0.12)",
                    border: "1px solid rgba(34,211,238,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <BookOpen size={20} />
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--primary)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {thesis.type}
                      </p>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          lineHeight: 1.4,
                          maxWidth: "680px",
                        }}
                      >
                        {thesis.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        background: "var(--surface-2)",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "999px",
                        border: "1px solid var(--border)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {thesis.year}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.82rem", color: "var(--primary)", marginBottom: "0.75rem" }}>
                    {thesis.institution}
                  </p>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                      marginBottom: "1.25rem",
                      maxWidth: "720px",
                    }}
                  >
                    {thesis.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {thesis.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={thesis.link}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                        textDecoration: "none",
                        marginLeft: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      View Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
