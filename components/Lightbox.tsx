"use client";

import { createPortal } from "react-dom";

interface LightboxProps {
  media: {
    type: "image" | "video";
    file: string;
  } | null;
  onClose: () => void;
}

export default function Lightbox({
  media,
  onClose,
}: LightboxProps) {
  if (!media || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Dark blurred background */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[10000] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
        aria-label="Close"
      >
        ×
      </button>

      {/* IMAGE */}
      {media.type === "image" && (
        <img
          src={`/works/${media.file}`}
          alt={media.file}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 block h-auto w-auto max-h-[90dvh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
        />
      )}

      {/* VIDEO */}
      {media.type === "video" && (
        <video
          src={`/works/${media.file}`}
          controls
          autoPlay
          playsInline
           preload="auto"
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 block h-auto w-auto max-h-[90dvh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
        />
      )}
    </div>,
    document.body
  );
}