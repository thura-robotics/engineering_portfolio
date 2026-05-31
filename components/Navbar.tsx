"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type NavLink = { label: string; href: string; external?: boolean };

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "/portfolio", external: true },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link: NavLink) => {
    setOpen(false);
    if (link.external) {
      router.push(link.href);
      return;
    }
    if (pathname !== "/") {
      router.push("/" + link.href);
      return;
    }
    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (link: NavLink) => {
    if (link.external) return pathname.startsWith(link.href);
    return false;
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(15,23,42,0.95)" : "rgba(15,23,42,0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "-0.02em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-display), sans-serif",
              flexShrink: 0,
            }}
          >
            Thura Zaw
          </Link>

          {/* Desktop links */}
          <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: isActive(link) ? "var(--primary)" : "var(--text-muted)",
                    fontSize: "0.875rem",
                    fontWeight: isActive(link) ? 600 : 500,
                    padding: "0.4rem 0.75rem",
                    borderRadius: "0.375rem",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.color = "var(--primary)";
                    (e.target as HTMLButtonElement).style.background = "var(--surface)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.color = isActive(link) ? "var(--primary)" : "var(--text-muted)";
                    (e.target as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginLeft: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "0.375rem",
                  border: "1px solid var(--primary)",
                  color: "var(--primary)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.background = "var(--primary)";
                  (e.target as HTMLAnchorElement).style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                  (e.target as HTMLAnchorElement).style.color = "var(--primary)";
                }}
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "none" }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)", padding: "1rem 1.5rem" }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: isActive(link) ? "var(--primary)" : "var(--text-muted)",
                fontSize: "0.95rem",
                padding: "0.6rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "0.75rem",
              textAlign: "center",
              padding: "0.5rem",
              border: "1px solid var(--primary)",
              borderRadius: "0.375rem",
              color: "var(--primary)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
