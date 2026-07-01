"use client";

import React from "react";

export default function MagneticCursor({
  containerRef,
  onClick,
  isPlaying = false,
}: {
  containerRef?: React.RefObject<HTMLDivElement | null>;
  onClick?: () => void;
  isPlaying?: boolean;
}) {
  return (
    <div 
      onClick={onClick}
      className="absolute -bottom-8 md:-bottom-14 xl:-bottom-20 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36 xl:w-56 xl:h-56 flex items-center justify-center">
        {/* Spinning circular text */}
        <div className="absolute inset-0 animate-spin-slow text-[10px] md:text-[12px] xl:text-[13px] text-white/80 tracking-[2px] pointer-events-none subHeading">
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

        {/* Play/Pause Icon Circle with hover effects */}
        <div className="w-16 h-16 md:w-20 md:h-20 xl:w-36 xl:h-36 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
          {isPlaying ? (
            /* Pause Icon */
            <div className="flex gap-1 md:gap-1.5 xl:gap-2">
              <div className="w-[3px] md:w-[4px] xl:w-[6px] h-[12px] md:h-[16px] xl:h-[24px] bg-white rounded-sm" />
              <div className="w-[3px] md:w-[4px] xl:w-[6px] h-[12px] md:h-[16px] xl:h-[24px] bg-white rounded-sm" />
            </div>
          ) : (
            /* Play Icon */
            <div className="w-0 h-0 border-l-[12px] md:border-l-[16px] xl:border-l-[24px] border-l-white border-t-[8px] md:border-t-[11px] xl:border-t-[16px] border-t-transparent border-b-[8px] md:border-b-[11px] xl:border-b-[16px] border-b-transparent ml-[3px] md:ml-[4px] xl:ml-[6px]" />
          )}
        </div>
      </div>
    </div>
  );
}
