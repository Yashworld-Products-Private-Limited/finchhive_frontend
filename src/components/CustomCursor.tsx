"use client";

import { useEffect, useRef, useState } from "react";
import { CursorOptions } from "./cursor";
import { useCustomCursor } from "./useCustomCursor";

// ── Default logo SVG content (globe icon) ─────────────────────────────────────
const DefaultLogo = () => (
  <>
    <circle
      cx="20"
      cy="20"
      r="14"
      stroke="rgba(255,255,255,0.85)"
      strokeWidth="1.5"
    />
    <path
      d="M20 7 C27 13, 27 27, 20 33 C13 27, 13 13, 20 7Z"
      fill="rgba(255,255,255,0.12)"
      stroke="rgba(255,255,255,0.65)"
      strokeWidth="1"
    />
    <circle cx="20" cy="20" r="3.5" fill="rgba(255,255,255,0.95)" />
    <line
      x1="20"
      y1="6"
      x2="20"
      y2="34"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="0.5"
    />
    <line
      x1="6"
      y1="20"
      x2="34"
      y2="20"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="0.5"
    />
  </>
);

type CustomCursorProps = CursorOptions;

export default function CustomCursor({
  logoSVG,
  accentColor = "#ffffff",
  idleDelay = 800,
  particleColor = "rgba(255,255,255,0.55)",
  logoSize = 56,
  logoHoverSize = 80,
  logoSlipStrength = 0.55,
  logoMaxSlip = 18,
  enabled = true,
  invertFlip = false,
}: CustomCursorProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    const checkTouch = () => {
      return (
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };
    setIsTouch(checkTouch());

    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const dotRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useCustomCursor(dotRef, logoRef, {
    accentColor,
    idleDelay,
    particleColor,
    logoSize,
    logoHoverSize,
    logoSlipStrength,
    logoMaxSlip,
    enabled: enabled && mounted && !isTouch,
    invertFlip,
  });

  if (!mounted || !enabled || isTouch) return null;

  return (
    <>
      {/* Dot: starts hidden, shown while moving, hidden again on idle */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 2147483647,
          width: 10,
          height: 10,
          background: accentColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0, 
          transition: "opacity 0.2s ease, background 0.2s ease",
          mixBlendMode: "difference",
          willChange: "transform, left, top",
          left: "50%",
          top: "50%",
        }}
      />

      {/* Logo: always visible, lags behind cursor while moving */}
      <div
        ref={logoRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 2147483646,
          width: logoSize,
          height: logoSize,
          transform: "translate(-50%, -50%)",
          opacity: 1, // always visible
          transition: `
            width 0.35s cubic-bezier(.23,1,.32,1),
            height 0.35s cubic-bezier(.23,1,.32,1),
            opacity 0.45s ease
          `,
          willChange: "transform, left, top, opacity",
          left: "50%",
          top: "50%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transform: "scaleX(var(--cursor-scale-x, 1))",
            transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
            willChange: "transform",
          }}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {logoSVG ?? <DefaultLogo />}
          </svg>
        </div>
      </div>
    </>
  );
}
