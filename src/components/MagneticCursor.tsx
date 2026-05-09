"use client";

import { useEffect, useRef, useState } from "react";

export default function MagneticCursor({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setVisible(isInside);

      if (!isInside || !cursorRef.current) return;

      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
    >
      <div className="relative w-36 h-36 flex items-center justify-center">
        {/* 🔵 ROTATING TEXT */}
        <div className="absolute inset-0 animate-spin-slow text-[12px] text-white/80 tracking-[2px]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text fill="white">
              <textPath href="#circlePath">
                PLAY VIDEO • KNOW ABOUT US •
              </textPath>
            </text>
          </svg>
        </div>

        {/* ⚪ GLASS CIRCLE */}
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {/* ▶ PLAY ICON */}
          <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-[3px]" />
        </div>
      </div>
    </div>
  );
}
