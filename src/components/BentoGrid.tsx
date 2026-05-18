"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface BentoItem {
  id: number;
  title: string;
  desc?: string;
  image: string;
  className?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export default function BentoGrid({
  items,
  className = "",
}: BentoGridProps) {
  return (
    <section
      className={`w-full py-20 overflow-hidden ${className} cursor-pointer`}
    >
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-2 md:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-[24px] ${
                item.className || "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.desc && (
                    <p className="text-white/70 text-sm mb-2 tracking-[2px] uppercase">
                      {item.desc}
                    </p>
                  )}
                  <h3 className="text-white text-2xl md:text-3xl font-bold uppercase">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}