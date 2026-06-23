"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface BentoItem {
  id: number;
  image: string;
  className?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export default function BentoGrid({ items, className = "" }: BentoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section
      className={`w-full py-20 overflow-hidden ${className} cursor-pointer`}
    >
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-2 md:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => openImage(index)}
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-[24px] cursor-pointer ${
                item.className || "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={item.image}
                alt={"abc"}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                
              </div>

              <div className="absolute inset-0 border border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={closeImage}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            className="absolute top-6 right-6 text-white text-4xl z-20"
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-12 text-white text-5xl z-20"
          >
            ‹
          </button>

          <div
            className="relative w-[95vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[selectedIndex].image}
              alt={"abc"}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-12 text-white text-5xl z-20"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
