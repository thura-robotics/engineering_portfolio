"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
          © {year} {personalInfo.name} · Built with Next.js & Tailwind
        </p>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          {[
            { href: personalInfo.github, icon: <GithubIcon size={17} />, label: "GitHub" },
            { href: personalInfo.linkedin, icon: <LinkedinIcon size={17} />, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={17} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
