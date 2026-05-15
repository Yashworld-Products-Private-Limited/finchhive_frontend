"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/imgs/exp1.png",
  "/imgs/exp2.png",
  "/imgs/exp3.png",
  "/imgs/exp4.png",
  "/imgs/exp5.png",
  "/imgs/exp6.png",
];

export default function ExpandingGallery() {
  // split into rows of 2
  const rows = [images.slice(0, 2), images.slice(2, 4), images.slice(4, 6)];

  return (
    <div className="w-full space-y-4">
      <div className="hidden md:flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex} images={row} />
        ))}
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-[240px] rounded-2xl overflow-hidden"
          >
            <Image src={src} alt="" fill sizes="100vw" loading="lazy" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Row({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4 h-[420px] lg:h-[460px]">
      {images.map((src, i) => {
        const isActive = active === i;

        return (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${isActive ? "w-[70%]" : "w-[30%]"}`}
          >
            <Image src={src} alt="" fill sizes="100vw" loading="lazy"  className="object-cover" />

            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
                isActive ? "grayscale-0 scale-105" : "backdrop-grayscale-100"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
