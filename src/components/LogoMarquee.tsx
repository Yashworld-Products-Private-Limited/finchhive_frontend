"use client";

import { Marquee } from "./ui/marquee";

export const logos = [
  {
    id: 1,
    src: "/imgs/brands/trustbrands1.png",
    alt: "Company 1",
  },
  {
    id: 2,
    src: "/imgs/brands/trustbrands2.png",
    alt: "Company 2",
  },
  {
    id: 3,
    src: "/imgs/brands/trustbrands3.png",
    alt: "Company 3",
  },
  {
    id: 4,
    src: "/imgs/brands/trustbrands4.png",
    alt: "Company 4",
  },
  {
    id: 5,
    src: "/imgs/brands/trustbrands5.png",
    alt: "Company 5",
  },
  {
    id: 6,
    src: "/imgs/brands/trustbrands6.png",
    alt: "Company 6",
  },
  {
    id: 7,
    src: "/imgs/brands/trustbrands7.png",
    alt: "Company 7",
  },
  {
    id: 8,
    src: "/imgs/brands/trustbrands8.png",
    alt: "Company 8",
  },
  {
    id: 9,
    src: "/imgs/brands/trustbrands9.png",
    alt: "Company 9",
  },
  {
    id: 10,
    src: "/imgs/brands/trustbrands10.png",
    alt: "Company 10",
  },
  {
    id: 11,
    src: "/imgs/brands/trustbrands11.png",
    alt: "Company 11",
  },
  {
    id: 12,
    src: "/imgs/brands/trustbrands12.png",
    alt: "Company 12",
  },
];

export default function LogoMarquee() {
  const repeated = [...logos, ...logos, ...logos];

  return (
    <section className="w-full py-2 overflow-hidden bg-white border border-gray-200 rounded-[32px]">
      <div className="relative flex">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover className="flex  gap-4 w-max ">
          {repeated.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-24 rounded-2xl bg-white border border-[#2E2C76]/10 flex items-center justify-center px-5 hover:border-[#2E2C76]/40 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-40 w-auto object-contain  group-hover:opacity-80 transition-opacity duration-300"
                // style={{
                //   filter:
                //     "brightness(0) saturate(100%) invert(3%) sepia(61%) saturate(1200%) hue-rotate(22deg) brightness(80%) contrast(10%)",
                // }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
