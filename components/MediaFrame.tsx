import type { CSSProperties } from "react";

/**
 * Blurred-fill media frame (Spotify / Apple TV style).
 * Shows the full image (object-fit: contain) centered, with a blurred,
 * zoomed copy of the same image filling the surrounding bars — so portrait
 * AND landscape images both look intentional inside a consistent frame.
 */
export default function MediaFrame({
  src,
  alt,
  aspectRatio = "16 / 9",
  radius = "0.75rem",
  objectFit = "contain",
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  radius?: string;
  /** "contain" (default) — shows full image with blurred fill bars.
   *  "cover" — fills the frame completely, cropping edges. */
  objectFit?: "contain" | "cover";
}) {
  const layer: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        borderRadius: radius,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      {/* Blurred backdrop — only visible when objectFit is "contain" */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        style={{
          ...layer,
          objectFit: "cover",
          filter: "blur(28px) brightness(0.5) saturate(1.1)",
          transform: "scale(1.18)",
        }}
      />
      {/* Foreground image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ ...layer, objectFit }}
      />
    </div>
  );
}
