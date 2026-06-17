"use client";
import { caseStudies } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const router = useRouter();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 items-start justify-center">
        {caseStudies.map((item, i) => (
          <div key={i} className={`relative space-y-5 cursor-none `}>
            <div
              onClick={() => router.push(item.link)}
              className="card-image relative w-full"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-transparent blur-3xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden h-[380px]  hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src={item.image}
                  alt="case study"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[18px] bg-white/5 rounded-xl blur-md" />
              <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-[14px] bg-white/10 rounded-xl blur-sm" />
            </div>

            <div className="card-info relative rounded-[20px] p-2 lg:p-5  overflow-visible bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff] border border-black/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:scale-[1.02] space-y-2">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2E2C76]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <span className="card-badge relative z-10 inline-block text-[10px]  tracking-wide px-3 py-1 rounded-full bg-[#2E2C76]/50 text-[#FFFFFF] ">
                CASE STUDY
              </span>
              <h3
                onClick={() => router.push(item.link)}
                className="card-title relative z-10 text-[#2E2C76] text-lg sm:text-xl lg:text-xl tracking-wide heading"
              >
                {item.title}
              </h3>
              <div className="relative z-10 space-y-1">
                <p
                  className={`card-desc text-gray-500 text-xs sm:text-sm md:text-base subHeading ${
                    expandedCards.includes(i) ? "" : "line-clamp-2"
                  }`}
                >
                  {item.desc}
                </p>

                {item.desc.length > 60 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();

                      setExpandedCards((prev) =>
                        prev.includes(i)
                          ? prev.filter((id) => id !== i)
                          : [...prev, i],
                      );
                    }}
                    className="text-[#2E2C76] text-sm font-medium hover:underline"
                  >
                    {expandedCards.includes(i) ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
