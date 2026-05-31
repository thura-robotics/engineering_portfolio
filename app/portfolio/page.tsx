import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HardwareProjects from "@/components/HardwareProjects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Thura Zaw",
  description: "Full project portfolio of Thura Zaw — Robotics, Embedded Systems, AI, and Computer Vision projects.",
};

const categories = [
  {
    id: "Robotics & Embedded" as const,
    label: "Robotics & Embedded Projects",
    description: "Autonomous systems, mechanical design, embedded firmware, PCB, and hardware-software integration.",
  },
  {
    id: "AI & Computer Vision" as const,
    label: "AI & Computer Vision Projects",
    description: "Machine learning, deep learning, TinyML, reinforcement learning, and visual intelligence applications.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "64px", minHeight: "100vh" }}>
        {/* Header */}
        <div
          style={{
            background: `radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 60%),
                         radial-gradient(ellipse at 80% 30%, rgba(34,197,94,0.08) 0%, transparent 55%),
                         var(--bg)`,
            borderBottom: "1px solid var(--border)",
            padding: "3rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
              {" › "}
              <span style={{ color: "var(--primary)" }}>Projects</span>
            </p>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
              Projects
            </h1>
            <p style={{ color: "var(--text-muted)", maxWidth: "560px", lineHeight: 1.7 }}>
              A collection of robotics, embedded systems, and AI projects built throughout my studies and professional work.
              Click any project to read the full technical breakdown.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
          {categories.map((cat) => {
            const catProjects = projects.filter((p) => p.portfolioCategory === cat.id);
            return (
              <div key={cat.id} style={{ marginBottom: "4rem" }}>
                <div style={{ marginBottom: "1.75rem" }}>
                  <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.4rem" }}>
                    {cat.label}
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{cat.description}</p>
                  <div style={{ width: "48px", height: "3px", background: "var(--primary)", borderRadius: "2px", marginTop: "0.75rem" }} />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {catProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/portfolio/${project.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="card"
                        style={{
                          overflow: "hidden",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {/* Thumbnail */}
                        <div
                          style={{
                            height: "160px",
                            background: "linear-gradient(135deg, var(--surface-2) 0%, var(--surface) 100%)",
                            borderBottom: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-muted)",
                            fontSize: "0.75rem",
                            opacity: 0.5,
                          }}
                        >
                          Photo coming soon
                        </div>

                        <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                          <h3
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              color: "var(--text)",
                              marginBottom: "0.5rem",
                              lineHeight: 1.4,
                            }}
                          >
                            {project.title}
                          </h3>

                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.75rem" }}>
                            {project.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="tag">{tag}</span>
                            ))}
                          </div>

                          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{project.period}</span>
                            <span style={{ fontSize: "0.8rem", color: "var(--primary)", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                              Details <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <HardwareProjects />
        </div>

        {/* CTA */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
            padding: "3rem 1.5rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
            Interested in collaborating?
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            I am open to research collaborations, robotics projects, and full-time opportunities.
          </p>
          <Link
            href="/#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.7rem 1.75rem",
              background: "var(--primary)",
              color: "var(--bg)",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
            }}
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
