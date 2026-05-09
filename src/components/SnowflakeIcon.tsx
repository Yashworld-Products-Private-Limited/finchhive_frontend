"use client";

import { useEffect, useRef, useState } from "react";

const PILLS = [
  { label: "Customer Support", rotate: -28, tx: -45, delay: 0.0 },
  { label: "Passion", rotate: 18, tx: 55, delay: 0.08 },
  { label: "Positive Experience", rotate: -18, tx: -60, delay: 0.16 },
  { label: "Trustworthiness", rotate: 12, tx: 48, delay: 0.24 },
  { label: "Customer Focus", rotate: -22, tx: -55, delay: 0.32 },
  { label: "Long-Term Relationships", rotate: 6, tx: 28, delay: 0.4 },
  { label: "Innovation", rotate: -12, tx: -25, delay: 0.48 },
  { label: "Collaboration", rotate: 22, tx: 42, delay: 0.56 },
  { label: "Personalization", rotate: -14, tx: -38, delay: 0.64 },
  { label: "Reliability", rotate: 14, tx: 40, delay: 0.72 },
  { label: "Quality", rotate: -4, tx: 5, delay: 0.8 },
];

export default function ValuesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-center overflow-hidden "
    >
      {/* LEFT TEXT (TOP ON MOBILE) */}
      <div className="text-center ">
        <h1 className="text-[#2E2C76]  uppercase heading leading-none tracking-[1%] whitespace-nowrap text-[clamp(80px,22vw,100pc)]">
          VALUES
        </h1>
      </div>

      {/* RIGHT / CENTER CIRCLE */}
      <div className="relative mt-10 md:mt-0 md:absolute md:left-[50%] md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        {/* Sphere */}
        <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[380px] md:h-[380px] rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center relative overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.08)]">
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            {PILLS.map((pill, i) => (
              <div
                key={pill.label}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-white font-extrabold text-[10px] sm:text-xs lg:text-base bg-gradient-to-br from-[#2E2C76] to-white shadow-lg transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
                style={{
                  transform: `rotate(${pill.rotate}deg) translateX(${pill.tx}px)`,
                  transitionDelay: `${pill.delay}s`,
                }}
              >
                ❄️ {pill.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
