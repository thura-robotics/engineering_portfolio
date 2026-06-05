import { personalInfo } from "@/lib/data";
import PhotoLightbox from "@/components/PhotoLightbox";
import { renderRich } from "@/components/richText";

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">About Me</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: personal photo (lightbox on click) ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <PhotoLightbox
              thumbnail="/projects/TA_portrait.png"
              fullSrc="/projects/TA.png"
              alt="Thura Zaw — Teaching Assistant"
              caption="Teaching Kirchhoff's Laws as a Teaching Assistant at KMITL"
            />
          </div>

          {/* ── Right: bio + quick facts ── */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              {personalInfo.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                    marginBottom: "1.25rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {renderRich(para)}
                </p>
              ))}
            </div>

            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "0.75rem",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  marginBottom: "1rem",
                }}
              >
                Quick Facts
              </h3>
              {[
                { label: "Degree", value: "B.Eng — Robotics & AI", bold: false },
                { label: "University", value: "KMITL, Bangkok", bold: false },
                { label: "GPA", value: "3.74 / 4.0 · First Class Honours", bold: true },
                { label: "Graduated", value: "April 2026", bold: false },
                { label: "Location", value: personalInfo.location, bold: false },
                { label: "Languages", value: "English, Japanese", bold: false },
                { label: "Interests", value: "Guitar, Chess, Novels, Gym", bold: false },
              ].map(({ label, value, bold }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--border)",
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>{label}</span>
                  <span style={{ color: "var(--text)", textAlign: "right", fontWeight: bold ? 700 : 400 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
