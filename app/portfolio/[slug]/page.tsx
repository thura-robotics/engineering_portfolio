import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon, YoutubeIcon } from "@/components/SocialIcons";
import MediaFrame from "@/components/MediaFrame";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import katex from "katex";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Thura Zaw`,
    description: project.outcome ?? project.shortDescription,
  };
}

const sectionHeading: React.CSSProperties = {
  fontSize: "1.15rem",
  fontWeight: 700,
  color: "var(--text)",
  marginBottom: "1.25rem",
  paddingBottom: "0.5rem",
  borderBottom: "1px solid var(--border)",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const facts = [
    { label: "Type", value: project.projectType },
    { label: "My Role", value: project.role },
    { label: "Team", value: project.teamSize },
    { label: "Duration", value: project.duration ?? project.period },
  ].filter((f) => f.value);

  const galleryItems = project.gallery ?? [{ caption: "" }, { caption: "" }, { caption: "" }];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
        {/* Breadcrumb + back */}
        <div style={{ borderBottom: "1px solid var(--border)", padding: "1rem 1.5rem", background: "var(--surface)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/portfolio"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "var(--text-muted)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}
            >
              <ArrowLeft size={15} /> Back to Projects
            </Link>
            <span style={{ color: "var(--border)" }}>|</span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
              {" › "}
              <Link href="/portfolio" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Projects</Link>
              {" › "}
              <span style={{ color: "var(--primary)" }}>{project.title}</span>
            </span>
          </div>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
          {/* ── 1. Title ── */}
          <p style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            {project.portfolioCategory}
          </p>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.15, marginBottom: "0.4rem" }}>
            {project.title}
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>{project.subtitle}</p>

          {/* ── 2. Outcome (punchy lead) ── */}
          {project.outcome && (
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--text)",
                fontWeight: 500,
                borderLeft: "4px solid var(--primary)",
                paddingLeft: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {project.outcome}
            </p>
          )}

          {/* ── 3. Hero visual ── */}
          <figure style={{ margin: "0 0 1rem" }}>
            {project.heroImage ? (
              <MediaFrame src={project.heroImage} alt={project.title} aspectRatio="16 / 9" />
            ) : (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                }}
              >
                Hero image — coming soon
              </div>
            )}
          </figure>

          {/* ── 4. Project facts strip ── */}
          {facts.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${facts.length}, 1fr)`,
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                borderRadius: "0.6rem",
                overflow: "hidden",
                margin: "2rem 0 2.5rem",
              }}
              className="facts-strip"
            >
              {facts.map((f) => (
                <div key={f.label} style={{ background: "var(--surface)", padding: "0.9rem 1rem" }}>
                  <p style={{ fontSize: "0.66rem", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.3rem" }}>
                    {f.label}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text)", lineHeight: 1.35 }}>{f.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── 5. Tags / skills ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2.5rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* ── 6. Context & Motivation ── */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={sectionHeading}>Context &amp; Motivation</h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "0.95rem", marginBottom: project.contextImage ? "1.25rem" : 0 }}>
              {project.fullDescription}
            </p>
            {project.contextImage && (
              <MediaFrame src={project.contextImage} alt="Context image" aspectRatio="16 / 7" radius="0.5rem" />
            )}
          </section>

          {/* ── 7. My Contributions ── */}
          {project.contributions && project.contributions.length > 0 && (
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={sectionHeading}>My Contributions</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {project.contributions.map((c, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>▹</span>
                    <span style={{ color: "var(--text)", fontSize: "0.92rem", lineHeight: 1.7 }}>{c}</span>
                  </li>
                ))}
              </ul>
              {project.teamImage && (
                <div style={{ marginTop: "1.5rem" }}>
                  <MediaFrame src={project.teamImage} alt="Team members" aspectRatio="16 / 7" radius="0.5rem" />
                </div>
              )}
            </section>
          )}

          {/* ── 8. Technical Details ── */}
          {project.technicalDetails.length > 0 && (
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={sectionHeading}>Technical Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {project.technicalDetails.map((detail, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderLeft: "3px solid var(--primary)",
                      borderRadius: "0 0.5rem 0.5rem 0",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--primary)", marginBottom: "0.5rem" }}>
                      {detail.heading}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.8 }}>
                      {detail.body}
                    </p>
                    {detail.equations && detail.equations.map((tex, e) => (
                      <div
                        key={e}
                        style={{ overflowX: "auto", padding: "0.75rem 0", textAlign: "center" }}
                        dangerouslySetInnerHTML={{
                          __html: katex.renderToString(tex, { displayMode: true, throwOnError: false }),
                        }}
                      />
                    ))}
                    {/* Images (before sub-sections) */}
                    {detail.images && detail.images.length > 0 && (
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: detail.imageColumns
                            ? `repeat(${detail.imageColumns}, 1fr)`
                            : "repeat(auto-fit, minmax(220px, 1fr))",
                          gap: "0.85rem",
                          marginTop: "1.25rem",
                        }}
                      >
                        {detail.images.map((img, j) => (
                          <figure key={j} style={{ margin: 0 }}>
                            <MediaFrame
                              src={img.src}
                              alt={img.caption}
                              aspectRatio="4 / 3"
                              radius="0.4rem"
                              objectFit={detail.imageFit ?? "contain"}
                            />
                            {img.caption && (
                              <figcaption style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginTop: "0.4rem", lineHeight: 1.45 }}>
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}
                    {/* Sub-sections (e.g. Firmware Integration, Forward / Inverse Kinematics) */}
                    {detail.subSections && detail.subSections.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "1.5rem" }}>
                        {detail.subSections.map((sub, s) => (
                          <div key={s} style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                            <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.6rem" }}>
                              {sub.heading}
                            </h4>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: sub.equations?.length ? "1rem" : 0 }}>
                              {sub.body}
                            </p>
                            {sub.equations && sub.equations.map((tex, e) => (
                              <div
                                key={e}
                                style={{ overflowX: "auto", padding: "0.75rem 0", textAlign: "center" }}
                                dangerouslySetInnerHTML={{
                                  __html: katex.renderToString(tex, { displayMode: true, throwOnError: false }),
                                }}
                              />
                            ))}
                            {sub.images && sub.images.length > 0 && (
                              <div style={{ display: "grid", gridTemplateColumns: sub.imageColumns ? `repeat(${sub.imageColumns}, 1fr)` : "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.85rem", marginTop: "1rem" }}>
                                {sub.images.map((img, si) => (
                                  <figure key={si} style={{ margin: 0 }}>
                                    <MediaFrame src={img.src} alt={img.caption} aspectRatio="4 / 3" radius="0.4rem" objectFit={sub.imageFit ?? "contain"} />
                                    {img.caption && (
                                      <figcaption style={{ fontSize: "0.73rem", color: "var(--text-muted)", marginTop: "0.4rem", lineHeight: 1.45 }}>
                                        {img.caption}
                                      </figcaption>
                                    )}
                                  </figure>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── 9. Gallery (captioned) ── */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={sectionHeading}>Gallery</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }} className="gallery-grid">
              {galleryItems.map((item, n) => (
                <figure key={n} style={{ margin: 0 }}>
                  {item.src ? (
                    <MediaFrame
                      src={item.src}
                      alt={item.caption || `${project.title} photo ${n + 1}`}
                      aspectRatio="4 / 3"
                      radius="0.5rem"
                    />
                  ) : (
                    <div
                      style={{
                        aspectRatio: "4/3",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-muted)",
                        fontSize: "0.75rem",
                      }}
                    >
                      Photo {n + 1}
                    </div>
                  )}
                  {item.caption && (
                    <figcaption style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.5rem", lineHeight: 1.45 }}>
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>

          {/* ── 10. Links (GitHub + YouTube) ── */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem", display: "flex", justifyContent: "center", gap: "1.25rem" }}>
            {[
              { label: "View on GitHub", href: project.github, icon: <GithubIcon size={26} /> },
              { label: "Watch Demo", href: project.youtube, icon: <YoutubeIcon size={26} /> },
            ].map(({ label, href, icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--primary)",
                    textDecoration: "none",
                    transition: "transform 0.2s, background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
                  }}
                >
                  {icon}
                </a>
              ) : (
                <span
                  key={label}
                  title={`${label} — link coming soon`}
                  aria-label={`${label} — coming soon`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px dashed var(--border)",
                    background: "transparent",
                    color: "var(--text-muted)",
                    opacity: 0.4,
                    cursor: "not-allowed",
                  }}
                >
                  {icon}
                </span>
              )
            )}
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .facts-strip { grid-template-columns: 1fr 1fr !important; }
        }
        .proj-link:hover {
          background: var(--primary) !important;
          color: var(--bg) !important;
          border-color: var(--primary) !important;
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(34,211,238,0.25);
        }
      `}</style>
    </>
  );
}
