import { certifications } from "@/lib/data";
import { Award, FileText } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Certifications</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "2rem", marginTop: "-1rem" }}>
          Click any certificate to view the full PDF.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certifications.map((cert, i) => {
            const inner = (
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: cert.pdf ? "pointer" : "default",
                  height: "100%",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.15s",
                }}
              >
                {/* Preview area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : cert.pdf ? (
                    /* PDF linked but no image — show a styled PDF icon */
                    <>
                      <FileText size={40} style={{ color: "var(--primary)", opacity: 0.7 }} />
                      <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 600, opacity: 0.8 }}>
                        View PDF
                      </span>
                    </>
                  ) : (
                    /* Nothing linked yet */
                    <>
                      <Award size={36} style={{ color: "var(--primary)", opacity: 0.25 }} />
                      <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", opacity: 0.45, textAlign: "center", padding: "0 1rem" }}>
                        Certificate coming soon
                      </span>
                    </>
                  )}

                  {/* "PDF" badge on top-right when a pdf is linked */}
                  {cert.pdf && (
                    <span
                      style={{
                        position: "absolute",
                        top: "0.6rem",
                        right: "0.6rem",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: "var(--primary)",
                        background: "rgba(34,211,238,0.14)",
                        border: "1px solid rgba(34,211,238,0.35)",
                        padding: "0.15rem 0.45rem",
                        borderRadius: "4px",
                      }}
                    >
                      PDF
                    </span>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "0.9rem 1.1rem" }}>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.25rem" }}>
                    {cert.name}
                  </p>
                  <p style={{ fontSize: "0.76rem", color: "var(--primary)", fontWeight: 600 }}>
                    {cert.issuer}
                  </p>
                  <p style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>
                    {cert.year}
                  </p>
                </div>
              </div>
            );

            return cert.pdf ? (
              <a
                key={i}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", display: "block" }}
              >
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
