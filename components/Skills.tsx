"use client";

import {
  SiPython, SiCplusplus, SiTensorflow,
  SiOpencv, SiNvidia, SiLinux, SiArduino,
  SiGit, SiStmicroelectronics,
} from "react-icons/si";
import Image from "next/image";

type TechItem =
  | { type: "icon"; icon: React.ReactNode; name: string; color: string }
  | { type: "img";  src: string; name: string; color: string; scale?: number; fit?: "contain" | "cover" };

const keyTech: TechItem[] = [
  { type: "icon", icon: <SiPython />,             name: "Python",      color: "#3776AB" },
  { type: "icon", icon: <SiCplusplus />,          name: "C++",         color: "#00599C" },
  { type: "icon", icon: <SiStmicroelectronics />, name: "STM32",       color: "#0071CF" },
  { type: "img",  src: "/skill-logos/ros.png",    name: "ROS",         color: "#22314E" },
  { type: "icon", icon: <SiTensorflow />,         name: "TensorFlow",  color: "#FF6F00" },
  { type: "icon", icon: <SiOpencv />,             name: "OpenCV",      color: "#5C3EE8" },
  { type: "icon", icon: <SiNvidia />,             name: "NVIDIA",      color: "#76B900" },
  { type: "icon", icon: <SiLinux />,              name: "Linux",       color: "#FCC624" },
  { type: "icon", icon: <SiArduino />,            name: "Arduino",     color: "#00979D" },
  { type: "img",  src: "/skill-logos/kicad.svg",  name: "KiCAD",       color: "#417DAA" },
  { type: "img",  src: "/skill-logos/altium.png", name: "Altium",      color: "#1a1a1a" },
  { type: "icon", icon: <SiGit />,                name: "Git",         color: "#F05032" },
  { type: "img",  src: "/skill-logos/solidworks.png", name: "SOLIDWORKS", color: "#CA2228" },
];

// Duplicate for seamless loop
const loopedTech = [...keyTech, ...keyTech];

function LogoItem({ tech }: { tech: TechItem }) {
  return (
    <div
      className="logo-item"
      title={tech.name}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        flexShrink: 0,
        padding: "0 0.5rem",
        "--hover-color": tech.color,
      } as React.CSSProperties}
    >
      {tech.type === "icon" ? (
        <span
          className="logo-icon"
          data-color={tech.color}
          style={{
            fontSize: "3.75rem",
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,0.35)",
            transition: "color 0.3s, transform 0.25s",
          }}
        >
          {tech.icon}
        </span>
      ) : (
        <div
          className="logo-img-wrap"
          style={{
            width: "150px",
            height: "60px",
            padding: "10px 16px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.25s, box-shadow 0.25s",
          }}
        >
          <Image
            src={tech.src}
            alt={tech.name}
            width={130}
            height={48}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              filter: "grayscale(1) opacity(0.7)",
              transition: "filter 0.3s",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 className="section-heading">Skills</h2>
      </div>

      {/* ── Marquee logo strip ── */}
      <div style={{ marginBottom: "3.5rem", overflow: "hidden", position: "relative" }}>
        <p style={{
          fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--text-muted)",
          marginBottom: "1.75rem", textAlign: "center",
        }}>
          Technologies I Work With
        </p>

        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: "40px", bottom: 0, width: "80px", zIndex: 2,
          background: "linear-gradient(to right, var(--bg), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: "40px", bottom: 0, width: "80px", zIndex: 2,
          background: "linear-gradient(to left, var(--bg), transparent)",
          pointerEvents: "none",
        }} />

        <div
          className="marquee-track"
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: "3rem",
          }}
        >
          {loopedTech.map((tech, i) => (
            <LogoItem key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* Icon hover — colour reveal */
        .logo-item:hover .logo-icon {
          color: var(--hover-color, #fff) !important;
          transform: scale(1.12);
        }
        .logo-item:hover .logo-img-wrap {
          background: #ffffff !important;
          transform: scale(1.12);
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        }
        .logo-item:hover .logo-img-wrap img {
          filter: none !important;
        }
      `}</style>

    </section>
  );
}
