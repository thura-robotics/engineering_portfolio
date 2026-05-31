import { experience } from "@/lib/data";
import Image from "next/image";

const orgLogos: Record<string, { src: string; bg: string; padding: string }> = {
  "General Magic (Thailand) Co., Ltd": {
    src: "/logos/general-magic.png",
    bg: "rgba(255,255,255,0.92)",
    padding: "6px",
  },
  "National Institute of Technology (Sendai College)": {
    src: "/logos/nit-sendai.jpg",
    bg: "rgba(255,255,255,0.92)",
    padding: "4px",
  },
  "King Mongkut's Institute of Technology Lad Krabang (KMITL)": {
    src: "/logos/kmitl.svg",
    bg: "rgba(255,255,255,0.92)",
    padding: "4px",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Experience</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experience.map((exp, i) => {
            const logo = orgLogos[exp.company];
            return (
              <div key={i} className="card" style={{ padding: "1.75rem" }}>
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
                  {/* Role + company + logo */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    {logo && (
                      <div
                        style={{
                          flexShrink: 0,
                          width: "52px",
                          height: "52px",
                          borderRadius: "10px",
                          background: logo.bg,
                          border: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: logo.padding,
                          opacity: 0.9,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={exp.company}
                          width={44}
                          height={44}
                          style={{ objectFit: "contain", width: "100%", height: "100%" }}
                        />
                      </div>
                    )}
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Period + location */}
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-mono, monospace)",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        color: "var(--primary)",
                        background: "rgba(34,211,238,0.1)",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "6px",
                        border: "1px solid rgba(34,211,238,0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.4rem" }}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {exp.description && (
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.75rem",
                      fontStyle: "italic",
                    }}
                  >
                    {exp.description}
                  </p>
                )}

                <ul style={{ paddingLeft: "1.25rem", margin: "0.75rem 0", color: "var(--text-muted)" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.35rem" }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
