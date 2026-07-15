"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

const posters = [
  "p1.jpeg",
  "p2.jpeg",
  "p3.jpeg",
  "p4.jpeg",
  "p5.jpeg",
  "p6.png",
  "p7.png",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

          {posters.map((poster) => (
            <div
              key={poster}
              onClick={() => setSelectedImage(poster)}
              className="overflow-hidden rounded-2xl bg-neutral-900 break-inside-avoid group cursor-pointer"
            >
              <img
                src={`/works/${poster}`}
                alt={poster}
                className="w-full transition duration-500 group-hover:scale-105"
              />
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