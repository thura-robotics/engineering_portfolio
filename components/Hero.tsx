"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
        background: `radial-gradient(ellipse at 18% 45%, rgba(37,99,235,0.18) 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 25%, rgba(6,182,212,0.14) 0%, transparent 50%),
                     radial-gradient(ellipse at 60% 90%, rgba(34,197,94,0.10) 0%, transparent 55%),
                     var(--bg)`,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Text content */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <p
            style={{
              color: "var(--primary)",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Hi there, I&apos;m
          </p>

          <h1
            className="gradient-text"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "0.75rem",
              letterSpacing: "-0.03em",
            }}
          >
            {personalInfo.name}
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 500,
              color: "var(--primary)",
              marginBottom: "0.5rem",
            }}
          >
            {personalInfo.title}
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              marginBottom: "1.5rem",
            }}
          >
            {personalInfo.subtitle}
          </p>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              maxWidth: "520px",
              marginBottom: "2rem",
              lineHeight: 1.8,
            }}
          >
            Building robots that work in the real world — from bipedal humanoid legs and
            autonomous UAV-UGV platforms to custom PCBs and AI vision systems.
            Currently based in{" "}
            <span style={{ color: "var(--text)" }}>{personalInfo.location}</span>.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="gradient-bg"
              style={{
                display: "inline-block",
                padding: "0.7rem 1.75rem",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "opacity 0.2s, transform 0.2s",
                boxShadow: "0 6px 20px rgba(6, 182, 212, 0.3)",
              }}
              onMouseEnter={(e) => { const el = e.target as HTMLAnchorElement; el.style.opacity = "0.9"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { const el = e.target as HTMLAnchorElement; el.style.opacity = "1"; el.style.transform = "translateY(0)"; }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-block",
                padding: "0.7rem 1.75rem",
                border: "1px solid var(--border)",
                color: "var(--text)",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.borderColor = "var(--primary)";
                (e.target as HTMLAnchorElement).style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.borderColor = "var(--border)";
                (e.target as HTMLAnchorElement).style.color = "var(--text)";
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {[
              { href: personalInfo.github, icon: <GithubIcon size={20} />, label: "GitHub" },
              { href: personalInfo.linkedin, icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--primary)";
                  el.style.borderColor = "var(--primary)";
                  el.style.background = "var(--surface)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "var(--text-muted)";
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div style={{ flexShrink: 0 }}>
          <div
            className="gradient-bg"
            style={{
              width: "clamp(200px, 28vw, 280px)",
              height: "clamp(200px, 28vw, 280px)",
              borderRadius: "50%",
              padding: "4px",
              boxShadow: "0 0 50px rgba(34,211,238,0.3)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "var(--surface)",
              }}
            >
              <img src="/photo.jpg" alt="Thura Zaw" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
