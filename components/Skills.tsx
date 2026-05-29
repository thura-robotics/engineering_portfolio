import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Programming": "{ }",
  "Robotics & Control": "⚙",
  "AI & Computer Vision": "◈",
  "Embedded Systems & PCB": "⬡",
  "Simulation & CAD": "◻",
  "Tools & DevOps": "⌥",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {skills.map((group) => (
            <div
              key={group.category}
              className="card"
              style={{ padding: "1.5rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "var(--primary)",
                    fontFamily: "monospace",
                    background: "rgba(56,189,248,0.1)",
                    border: "1px solid rgba(56,189,248,0.2)",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.375rem",
                    flexShrink: 0,
                  }}
                >
                  {categoryIcons[group.category] || "·"}
                </span>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text)" }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
