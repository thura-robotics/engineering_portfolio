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
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
        {/* Breadcrumb + back */}
        <div style={{ borderBottom: "1px solid var(--border)", padding: "1rem 1.5rem", background: "var(--surface)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
              }}
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
          {/* Hero image */}
          <div
            style={{
              width: "100%",
              height: "360px",
              background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)",
              border: "1px solid var(--border)",
              borderRadius: "0.75rem",
              marginBottom: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
          >
            Photo coming soon
          </div>

          {/* Title block */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                  {project.portfolioCategory}
                </p>
                <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                  {project.title}
                </h1>
                <p style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 400 }}>{project.subtitle}</p>
              </div>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", background: "var(--surface)", border: "1px solid var(--border)", padding: "0.3rem 0.75rem", borderRadius: "999px", whiteSpace: "nowrap", marginTop: "0.25rem" }}>
                {project.period}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Overview */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border)" }}>
              Overview
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.85, fontSize: "0.95rem" }}>
              {project.fullDescription}
            </p>
          </section>

          {/* Technical Details */}
          {project.technicalDetails.length > 0 && (
            <section style={{ marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "1.25rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border)" }}>
                Technical Details
              </h2>
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

          {/* Photo Gallery */}
          <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "1.25rem", paddingBottom: "0.5rem", borderBottom: "1px solid var(--border)" }}>
              Gallery
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }} className="gallery-grid">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
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
                  Photo {n}
                </div>
              ))}
            </div>
          </section>

          {/* GitHub */}
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
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
