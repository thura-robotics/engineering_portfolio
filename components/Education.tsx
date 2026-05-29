import { education } from "@/lib/data";
import Image from "next/image";

const institutionLogos: Record<string, { src: string; bg: string; padding: string }> = {
  "King Mongkut's Institute of Technology Lad Krabang (KMITL)": {
    src: "/logos/kmitl.svg",
    bg: "rgba(255,255,255,0.92)",
    padding: "4px",
  },
  "Yangon Technological University": {
    src: "/logos/ytu.png",
    bg: "rgba(255,255,255,0.92)",
    padding: "4px",
  },
};

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Education</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {education.map((edu, i) => {
            const logo = institutionLogos[edu.institution];
            return (
              <div key={i} className="card" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  {/* Logo or fallback icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "52px",
                      height: "52px",
                      borderRadius: "10px",
                      background: logo ? logo.bg : "rgba(56,189,248,0.08)",
                      border: logo ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(56,189,248,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: logo ? logo.padding : "0",
                      opacity: 0.9,
                      overflow: "hidden",
                    }}
                  >
                    {logo ? (
                      <Image
                        src={logo.src}
                        alt={edu.institution}
                        width={44}
                        height={44}
                        style={{ objectFit: "contain", width: "100%", height: "100%" }}
                      />
                    ) : (
                      <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary)", fontFamily: "monospace" }}>
                        {edu.institution.split(/[\s(]/)[0].slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>
                          {edu.degree}
                        </h3>
                        <p style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.875rem" }}>
                          {edu.institution}
                        </p>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                          {edu.location}
                        </p>
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
                        {edu.period}
                      </span>
                    </div>

                    {edu.gpa && (
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: "0.5rem 0" }}>
                        <span style={{ color: "var(--primary)", fontWeight: 600 }}>GPA: </span>
                        {edu.gpa}
                      </p>
                    )}

                    {edu.courses.length > 0 && (
                      <div style={{ marginTop: "0.75rem" }}>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Relevant Coursework
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {edu.courses.map((course) => (
                            <span key={course} className="tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
