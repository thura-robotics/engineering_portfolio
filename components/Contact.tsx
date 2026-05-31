"use client";

import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <h2 className="section-heading" style={{ display: "block" }}>
          Let&apos;s Work Together
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          I am currently open to full-time positions, research collaborations, and freelance
          robotics or embedded systems projects. Feel free to reach out — I&apos;d love to connect.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            display: "inline-block",
            padding: "0.85rem 2.5rem",
            background: "var(--primary)",
            color: "var(--bg)",
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            marginBottom: "3rem",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.opacity = "0.85")}
          onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.opacity = "1")}
        >
          Say Hello
        </a>

        {/* Icon links — click to open */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          {[
            { icon: <Mail size={28} />, label: "Email", href: `mailto:${personalInfo.email}`, external: false },
            { icon: <Phone size={28} />, label: "Phone", href: `tel:${personalInfo.phone}`, external: false },
            { icon: <GithubIcon size={28} />, label: "GitHub", href: personalInfo.github, external: true },
            { icon: <LinkedinIcon size={28} />, label: "LinkedIn", href: personalInfo.linkedin, external: true },
          ].map(({ icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              title={label}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--primary)",
                textDecoration: "none",
                transition: "transform 0.2s, background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--primary)";
                el.style.color = "var(--bg)";
                el.style.borderColor = "var(--primary)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 8px 22px rgba(34,211,238,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "var(--surface)";
                el.style.color = "var(--primary)";
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Location (not a link) */}
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            marginTop: "2rem",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
          }}
        >
          <MapPin size={15} style={{ color: "var(--primary)" }} />
          {personalInfo.location}
        </p>
      </div>
    </section>
  );
}
