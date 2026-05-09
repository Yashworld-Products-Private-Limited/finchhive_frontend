"use client";

import { Marquee } from "./ui/marquee";

export const logos = [
  {
    id: 1,
    src: "https://img.logoipsum.com/288.svg",
    alt: "Company 1",
  },
  {
    id: 2,
    src: "https://img.logoipsum.com/245.svg",
    alt: "Company 2",
  },
  {
    id: 3,
    src: "https://img.logoipsum.com/297.svg",
    alt: "Company 3",
  },
  {
    id: 4,
    src: "https://img.logoipsum.com/333.svg",
    alt: "Company 4",
  },
  {
    id: 5,
    src: "https://img.logoipsum.com/286.svg",
    alt: "Company 5",
  },
  {
    id: 6,
    src: "https://img.logoipsum.com/321.svg",
    alt: "Company 6",
  },
  {
    id: 7,
    src: "https://img.logoipsum.com/250.svg",
    alt: "Company 7",
  },
];

export default function LogoMarquee() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-6 overflow-hidden bg-white border border-gray-200 rounded-[32px]">
      <div className="relative flex">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <Marquee pauseOnHover className="flex  gap-4 w-max ">
          {repeated.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-16 rounded-2xl bg-white border border-[#2E2C76]/10 flex items-center justify-center px-5 hover:border-[#2E2C76]/40 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(13%) sepia(61%) saturate(1200%) hue-rotate(224deg) brightness(80%) contrast(110%)",
                }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
