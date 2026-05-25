"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesPage } from "@/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const router = useRouter();
  const gridRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards =
      gridRef.current.querySelectorAll<HTMLElement>(".service-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={gridRef}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-6 mt-8"
      >
        {servicesPage.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              onClick={() => router.push(item.link)}
              className="service-card flex flex-col items-start justify-between group relative rounded-3xl p-3 lg:p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 hover:border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 space-y-2 lg:space-y-5"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center rounded-xl bg-[#2E2C76] p-4">
                  <Icon className="text-white" size={24} />
                </div>

                <h3 className="text-gray-900 text-[22px] md:text-[24px] 2xl:text-[26px] heading">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm lg:text-base subHeading leading-normal">
                {item.desc}
              </p>

              <Link
                href={item.link}
                className="flex items-center gap-3 text-gray-900 text-xs uppercase"
              >
                <span className="subHeading">Learn More</span>

                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-blue-400 transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;