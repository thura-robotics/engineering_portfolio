import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
            {galleryItems[0]?.caption && (
              <figcaption style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.6rem", textAlign: "center", fontStyle: "italic" }}>
                {galleryItems[0].caption}
              </figcaption>
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
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "0.95rem" }}>
              {project.fullDescription}
            </p>
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
                  {item.caption && (
                    <figcaption style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.5rem", lineHeight: 1.45 }}>
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>

          {/* ── 10. GitHub ── */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.75rem", display: "flex", justifyContent: "center" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.7rem 1.75rem",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--text)",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                background: "var(--surface)",
              }}
            >
              <GithubIcon size={18} /> View on GitHub
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .facts-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
