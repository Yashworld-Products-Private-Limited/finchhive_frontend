import { caseStudies } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const CaseStudies = () => {
  const router = useRouter();
  const [hovered, setHovered] = React.useState<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[120px]">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            onClick={() => router.push(item.link)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={(e) => {
              if (!cursorRef.current) return;

              const rect = e.currentTarget.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              requestAnimationFrame(() => {
                if (cursorRef.current) {
                  cursorRef.current.style.transform = `
        translate(${x}px, ${y}px) translate(-50%, -50%)
      `;
                }
              });
            }}
            className={`relative space-y-5 cursor-none ${
              i === 0 || i === 2 ? "md:mt-[-80px]" : "md:mt-[0px]"
            }`}
          >
            {hovered === i && (
              <div
                ref={cursorRef}
                className="pointer-events-none absolute z-50 hidden md:flex items-center justify-center  w-28 h-28 rounded-full  bg-white/15 backdrop-blur-xl  border border-white/20  text-[#2E2C76]  shadow-[0_8px_40px_rgba(0,0,0,0.35)]  -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
              >
                <div className="flex flex-col items-center gap-1">
                  <ArrowUpRight className="w-5 h-5" />

                  <span className="text-xs tracking-[0em] font-medium uppercase">
                    View
                  </span>
                </div>

                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
              </div>
            )}

            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-transparent blur-3xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] md:h-[460px] lg:h-[550px] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
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
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[18px] bg-white/5 rounded-xl blur-md" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-[14px] bg-white/10 rounded-xl blur-sm" />
            </div>
            <div className="relative rounded-[20px] p-5 sm:p-6 md:p-8 overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff] border border-black/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E2C76]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <span className="inline-block text-[10px] sm:text-xs tracking-wide px-3 py-1 rounded-full bg-[#2E2C76]/50 text-[#FFFFFF] mb-3 sm:mb-4">
                CASE STUDY
              </span>
              <h3 className="text-[#2E2C76] text-lg sm:text-xl md:text-2xl tracking-wide mb-2 heading">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-5 sm:mb-6 subHeading">
                {item.desc}
              </p>
              <div className="flex items-center justify-between">
                {item.stats.map((stat, j) => (
                  <div key={j}>
                    <h2 className="text-[#2E2C76] text-2xl sm:text-3xl md:text-4xl font-bold Heading">
                      {stat.value}
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
