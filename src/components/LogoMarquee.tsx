"use client";

import { Marquee } from "./ui/marquee";

export const logos = [
  { id: 1, src: "/api/imgs/brands/trustbrands1.png", alt: "Company 1" },
  { id: 2, src: "/api/imgs/brands/trustbrands2.png", alt: "Company 2" },
  { id: 3, src: "/api/imgs/brands/trustbrands3.png", alt: "Company 3" },
  { id: 4, src: "/api/imgs/brands/trustbrands4.png", alt: "Company 4" },
  { id: 5, src: "/api/imgs/brands/trustbrands5.png", alt: "Company 5" },
  { id: 6, src: "/api/imgs/brands/trustbrands6.png", alt: "Company 6" },
  { id: 7, src: "/api/imgs/brands/trustbrands7.png", alt: "Company 7" },
  { id: 8, src: "/api/imgs/brands/trustbrands8.png", alt: "Company 8" },
  { id: 9, src: "/api/imgs/brands/trustbrands9.png", alt: "Company 9" },
  { id: 10, src: "/api/imgs/brands/trustbrands10.png", alt: "Company 10" },
  { id: 11, src: "/api/imgs/brands/trustbrands11.png", alt: "Company 11" },
  { id: 12, src: "/api/imgs/brands/trustbrands12.png", alt: "Company 12" },
  { id: 13, src: "/api/imgs/brands/trustbrands13.png", alt: "Company 13" },
  { id: 14, src: "/api/imgs/brands/trustbrands14.png", alt: "Company 14" },
  { id: 16, src: "/api/imgs/brands/trustbrands16.svg", alt: "Company 16" },
  { id: 15, src: "/api/imgs/brands/trustbrands15.png", alt: "Company 15" },
  { id: 17, src: "/api/imgs/brands/trustbrands17.png", alt: "Company 17" },
  { id: 18, src: "/api/imgs/brands/trustbrands18.png", alt: "Company 18" },
];

export default function LogoMarquee() {
  return (
    <section className="w-full py-2 overflow-hidden transform-gpu">
      <div className="relative flex">
        <div className="absolute left-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-r from-[#eeeef4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 sm:w-32 bg-gradient-to-l from-[#eeeef4] to-transparent z-10 pointer-events-none" />

        <Marquee repeat={2} className="flex gap-4 w-max [--duration:40s]">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 w-36 sm:w-44 h-24 sm:h-28 rounded-2xl flex items-center justify-center mx-2 sm:mx-4 transform-gpu"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={176}
                height={112}
                loading="eager"
                decoding="async"
                className={`${logo.id === 15 ? "h-28" : "h-48"} w-auto object-contain group-hover:opacity-80 transition-opacity duration-300`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
