"use client";

import Image from "next/image";
import { Marquee } from "./ui/marquee";

export const logos = [
  {
    id: 1,
    src: "/api/imgs/brands/trustbrands1.png",
    alt: "Company 1",
  },
  {
    id: 2,
    src: "/api/imgs/brands/trustbrands2.png",
    alt: "Company 2",
  },
  {
    id: 3,
    src: "/api/imgs/brands/trustbrands3.png",
    alt: "Company 3",
  },
  {
    id: 4,
    src: "/api/imgs/brands/trustbrands4.png",
    alt: "Company 4",
  },
  {
    id: 5,
    src: "/api/imgs/brands/trustbrands5.png",
    alt: "Company 5",
  },
  {
    id: 6,
    src: "/api/imgs/brands/trustbrands6.png",
    alt: "Company 6",
  },
  {
    id: 7,
    src: "/api/imgs/brands/trustbrands7.png",
    alt: "Company 7",
  },
  {
    id: 8,
    src: "/api/imgs/brands/trustbrands8.png",
    alt: "Company 8",
  },
  {
    id: 9,
    src: "/api/imgs/brands/trustbrands9.png",
    alt: "Company 9",
  },
  {
    id: 10,
    src: "/api/imgs/brands/trustbrands10.png",
    alt: "Company 10",
  },
  {
    id: 11,
    src: "/api/imgs/brands/trustbrands11.png",
    alt: "Company 11",
  },
  {
    id: 12,
    src: "/api/imgs/brands/trustbrands12.png",
    alt: "Company 12",
  },
  {
    id: 13,
    src: "/api/imgs/brands/trustbrands13.png",
    alt: "Company 13",
  },
];

export default function LogoMarquee() {
  return (
    <section className="w-full py-2 overflow-hidden">
      <div className="relative flex">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#eeeef4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#eeeef4] to-transparent z-10 pointer-events-none" />

        <Marquee pauseOnHover repeat={3} className="flex gap-4 w-max">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex-shrink-0 w-48 h-36 rounded-2xl flex items-center justify-center ml-2 lg:ml-5 transition-opacity duration-300 cursor-pointer group"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={192}
                height={144}
                loading="lazy"
                className="h-48 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
