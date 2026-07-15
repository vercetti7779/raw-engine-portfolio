"use client";

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({
  image,
  onClose,
}: LightboxProps) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-6"
    >
      <img
        src={`/works/${image}`}
        alt={image}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
      />
    </div>
  );
}