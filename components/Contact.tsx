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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            textAlign: "left",
          }}
        >
          {[
            { icon: <Mail size={16} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { icon: <Phone size={16} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { icon: <MapPin size={16} />, label: "Location", value: personalInfo.location, href: undefined },
            { icon: <GithubIcon size={16} />, label: "GitHub", value: "github.com/thura-robotics", href: personalInfo.github },
            { icon: <LinkedinIcon size={16} />, label: "LinkedIn", value: "linkedin.com/in/thura-robotics", href: personalInfo.linkedin },
          ].map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="card"
              style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ color: "var(--primary)", flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text)",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--primary)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--text)")}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.85rem", color: "var(--text)" }}>{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
