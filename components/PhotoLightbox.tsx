"use client";

import { useState, useEffect, useCallback } from "react";

export default function PhotoLightbox({
  thumbnail,
  fullSrc,
  alt,
  caption,
}: {
  thumbnail: string;
  fullSrc: string;
  alt: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openLightbox = () => {
    setOpen(true);
    // tiny delay so the initial scale:0.85 is painted before transitioning
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const closeLightbox = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 280);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, closeLightbox]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Thumbnail (clickable) ── */}
      <div
        style={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          border: "1px solid var(--border)",
          lineHeight: 0,
          width: "80%",
          cursor: "zoom-in",
          transition: "box-shadow 0.2s, transform 0.2s",
        }}
        onClick={openLightbox}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 2px var(--primary)";
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.01)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={alt}
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>
      {caption && (
        <p style={{ fontSize: "0.73rem", color: "var(--text-muted)", textAlign: "center", lineHeight: 1.4 }}>
          {caption}
        </p>
      )}

      {/* ── Lightbox overlay ── */}
      {open && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `rgba(0,0,0,${visible ? 0.82 : 0})`,
            transition: "background 0.28s ease",
            padding: "1.5rem",
            cursor: "zoom-out",
          }}
        >
          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "min(90vw, 960px)",
              maxHeight: "90vh",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              transform: visible ? "scale(1)" : "scale(0.85)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.22s ease",
              cursor: "default",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fullSrc}
              alt={alt}
              style={{ display: "block", maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }}
            />
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "1rem",
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Click-outside hint */}
          <p
            style={{
              position: "fixed",
              bottom: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.75rem",
              pointerEvents: "none",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.28s ease",
            }}
          >
            Click outside or press Esc to close
          </p>
        </div>
      )}
    </>
  );
}
