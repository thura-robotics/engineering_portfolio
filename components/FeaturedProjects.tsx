import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredSlugs = ["uav-ugv-system", "omnidirectional-robot", "bipedal-humanoid-leg"];

export default function FeaturedProjects() {
  // Preserve the order defined in featuredSlugs
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="projects" className="section section-alt">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <h2 className="section-heading" style={{ marginBottom: 0 }}>
            Featured Projects
          </h2>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--primary)",
              textDecoration: "none",
              paddingBottom: "8px",
            }}
          >
            View All Projects <ArrowRight size={15} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
            gap: "1.5rem",
          }}
          className="featured-grid"
        >
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Thumbnail — blurred-fill so wide composites show fully */}
                <div
                  style={{
                    height: "200px",
                    borderBottom: "1px solid var(--border)",
                    position: "relative",
                    overflow: "hidden",
                    background: "var(--surface-2)",
                    flexShrink: 0,
                  }}
                >
                  {project.heroImage ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.heroImage}
                        alt=""
                        aria-hidden="true"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(18px) brightness(0.45) saturate(1.1)", transform: "scale(1.15)" }}
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </>
                  ) : (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "0.8rem", opacity: 0.4 }}>
                      Photo coming soon
                    </div>
                  )}
                </div>

                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600, marginBottom: "0.3rem" }}>
                    {project.subtitle}
                  </p>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {project.shortDescription}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tag">+{project.tags.length - 4}</span>
                      )}
                    </div>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--primary)",
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Read more <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 2rem",
              border: "1px solid var(--primary)",
              borderRadius: "0.5rem",
              color: "var(--primary)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "background 0.15s, color 0.15s",
            }}
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
