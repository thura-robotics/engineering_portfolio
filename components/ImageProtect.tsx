"use client";

import { useEffect } from "react";

/**
 * Lightweight image-saving deterrent.
 * - Blocks right-click context menu when the target is an <img>
 * - Blocks drag-to-save on images
 * Scoped to images only, so text (email, etc.) stays selectable.
 * NOTE: This only stops casual saving. It cannot stop DevTools or screenshots.
 */
export default function ImageProtect() {
  useEffect(() => {
    const isImage = (el: EventTarget | null) =>
      el instanceof HTMLElement &&
      (el.tagName === "IMG" || !!el.closest("[data-protected]"));

    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };
    const onDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLElement && e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
