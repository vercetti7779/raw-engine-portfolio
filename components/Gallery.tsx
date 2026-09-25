"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

const portfolio: { type: "image" | "video"; file: string }[] = [
  { type: "image", file: "p1.jpeg" },
  { type: "image", file: "p5.jpeg" },
  { type: "image", file: "p3.jpeg" },
  { type: "image", file: "p4.jpeg" },
  { type: "image", file: "p12.jpeg" },
  { type: "image", file: "p6.png" },
  { type: "image", file: "p7.png" },
  { type: "image", file: "p8.png" },
  { type: "image", file: "p9.jpeg" },
  { type: "image", file: "p10.png" },
  { type: "image", file: "p11.jpeg" },
  { type: "image", file: "p2.jpeg" },
  { type: "image", file: "p13.png" },

  { type: "video", file: "v1.mp4" },
  { type: "video", file: "v2.mp4" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredPortfolio =
  filter === "all"
    ? portfolio
    : portfolio.filter((item) => item.type === filter);

  return (
    <>
      <section
        id="gallery"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Selected Works
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          {filteredPortfolio.map((item) => (
  <div
    key={item.file}
    onClick={() => {
      if (item.type === "image") {
        setSelectedImage(item.file);
      }
    }}
    className="overflow-hidden rounded-2xl bg-neutral-900 break-inside-avoid group cursor-pointer"
  >
    {item.type === "image" ? (
      <img
        src={`/works/${item.file}`}
        alt={item.file}
        className="w-full transition duration-500 group-hover:scale-105"
      />
    ) : (
      <video
        src={`/works/${item.file}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full transition duration-500 group-hover:scale-105"
      />
    )}
  </div>
))}

        </div>
      </section>

      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}