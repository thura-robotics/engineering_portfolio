import { achievements, certifications } from "@/lib/data";
import { Trophy, Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Achievements & Certifications</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
          className="ach-grid"
        >
          {/* Achievements */}
          <div>
            <h3
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              Awards
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {achievements.map((ach, i) => (
                <div key={i} className="card" style={{ padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <Trophy
                    size={20}
                    style={{ color: "#f59e0b", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: "0.2rem" }}>
                      {ach.title}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 600, marginBottom: "0.25rem" }}>
                      {ach.event} · {ach.year}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: "1rem 1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Award size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                      {cert.name}
                    </p>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .ach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
