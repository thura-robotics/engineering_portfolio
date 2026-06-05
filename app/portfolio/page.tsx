import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HardwareProjects from "@/components/HardwareProjects";
import ProjectsBrowser from "@/components/ProjectsBrowser";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Thura Zaw",
  description: "Full project portfolio of Thura Zaw — Robotics, Embedded Systems, AI, and Computer Vision projects.",
};

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
          <ProjectsBrowser />

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
