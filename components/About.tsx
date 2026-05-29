import { personalInfo } from "@/lib/data";

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
          <div>
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
                {para}
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
              { label: "Degree", value: "B.Eng — Robotics & AI" },
              { label: "University", value: "KMITL, Bangkok" },
              { label: "GPA", value: "3.7 / 4.0 · First Class Honours" },
              { label: "Graduating", value: "April 2026" },
              { label: "Location", value: personalInfo.location },
              { label: "Languages", value: "English, Japanese" },
              { label: "Interests", value: "Guitar, Chess, Novels, Gym" },
            ].map(({ label, value }) => (
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
                <span style={{ color: "var(--text)", textAlign: "right" }}>{value}</span>
              </div>
            ))}
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
