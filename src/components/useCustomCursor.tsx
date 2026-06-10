"use client";

import { useEffect, useRef, useCallback } from "react";
import { CursorOptions } from "./cursor";

const DEFAULT_MAGNETIC_SELECTORS = ["button", "a", "[data-magnetic]"];
const MAX_PARTICLES = 25;
const PARTICLE_DURATION_MS = 650;
const PARTICLE_THROTTLE_MS = 38;
const LOGO_LAG_FACTOR = 0.1;
const STRETCH_SPEED_THRESHOLD = 2;
const PARTICLE_SPEED_THRESHOLD = 5;
const STRETCH_MAX = 2.4;

export function useCustomCursor(
  dotRef: React.RefObject<HTMLDivElement | null>,
  logoRef: React.RefObject<HTMLDivElement | null>,
  options: CursorOptions = {},
) {
  const {
    accentColor = "#ffffff",
    idleDelay = 800,
    magneticSelectors = DEFAULT_MAGNETIC_SELECTORS,
    particleColor = "rgba(255,255,255,0.55)",
    logoSize = 52,
    logoHoverSize = 80,
    enabled = true,
  } = options;

  const state = useRef({
    mx: 0,
    my: 0,
    lx: 0,
    ly: 0,
    prevMx: 0,
    prevMy: 0,
    vx: 0,
    vy: 0,
    isIdle: false,
    isHovering: false,
    isVisible: false,
    activeParticles: 0,
    lastParticleTime: 0,
    rafId: 0,
    idleTimer: undefined as ReturnType<typeof setTimeout> | undefined,
  });

  // ─── Particle ──────────────────────────────────────────────────────────────
  const spawnParticle = useCallback(
    (x: number, y: number) => {
      if (state.current.activeParticles >= MAX_PARTICLES) return;
      if (typeof document === "undefined") return;

      const p = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const offsetX = (Math.random() - 0.5) * 8;
      const offsetY = (Math.random() - 0.5) * 8;

      p.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 2147483645;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        background: ${particleColor};
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.65;
        transition: opacity ${PARTICLE_DURATION_MS}ms ease, transform ${PARTICLE_DURATION_MS}ms ease;
      `;
      document.body.appendChild(p);
      state.current.activeParticles++;

      requestAnimationFrame(() => {
        p.style.opacity = "0";
        p.style.transform = "translate(-50%, -50%) scale(0.1)";
      });

      setTimeout(() => {
        p.remove();
        state.current.activeParticles--;
      }, PARTICLE_DURATION_MS);
    },
    [particleColor],
  );

  // ─── RAF loop: animate lagging logo ───────────────────────────────────────
  const animateLogo = useCallback(
    function animateLogo() {
      const s = state.current;
      const logo = logoRef.current;

      if (logo) {
        const dx = s.mx - s.lx;
        const dy = s.my - s.ly;
        s.lx += dx * LOGO_LAG_FACTOR;
        s.ly += dy * LOGO_LAG_FACTOR;

        logo.style.left = `${s.lx}px`;
        logo.style.top = `${s.ly}px`;
        logo.style.transform = `translate(-50%, -50%)`;
      }

      s.rafId = requestAnimationFrame(animateLogo);
    },
    [logoRef],
  );

  // ─── Mouse move ───────────────────────────────────────────────────────────
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const s = state.current;
      const dot = dotRef.current;
      const logo = logoRef.current;

      s.mx = e.clientX;
      s.my = e.clientY;
      s.vx = s.mx - s.prevMx;
      s.vy = s.my - s.prevMy;
      s.prevMx = s.mx;
      s.prevMy = s.my;

      if (!s.isVisible) {
        s.isVisible = true;
        s.lx = s.mx;
        s.ly = s.my;
      }

      // When moving: show dot, logo follows (always visible)
      if (dot) {
        dot.style.opacity = "1";
        dot.style.left = `${s.mx}px`;
        dot.style.top = `${s.my}px`;

        if (!s.isHovering) {
          const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
          if (speed > STRETCH_SPEED_THRESHOLD) {
            const angle = (Math.atan2(s.vy, s.vx) * 180) / Math.PI;
            const stretch = Math.min(1 + speed * 0.055, STRETCH_MAX);
            const squish = 1 / Math.sqrt(stretch);
            dot.style.transform = `translate(-50%,-50%) rotate(${angle}deg) scaleX(${stretch}) scaleY(${squish})`;
          } else {
            dot.style.transform = "translate(-50%,-50%)";
          }
        }
      }

      // Logo: always visible, opacity 1
      if (logo) {
        logo.style.opacity = "1";
      }

      // Idle detection
      clearTimeout(s.idleTimer);

      // Coming back from idle
      if (s.isIdle) {
        s.isIdle = false;
      }

      // Set idle after delay: hide dot, keep logo visible
      s.idleTimer = setTimeout(() => {
        s.isIdle = true;
        const dot = dotRef.current;
        if (dot) dot.style.opacity = "0";
        // Logo stays visible (opacity stays 1)
      }, idleDelay);

      // Particles
      const now = performance.now();
      const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
      if (
        speed > PARTICLE_SPEED_THRESHOLD &&
        now - s.lastParticleTime > PARTICLE_THROTTLE_MS
      ) {
        spawnParticle(s.mx, s.my);
        s.lastParticleTime = now;
      }
    },
    [dotRef, logoRef, idleDelay, spawnParticle],
  );

  // ─── Mouse enter/leave window ─────────────────────────────────────────────
  const handleMouseLeave = useCallback(() => {
    const dot = dotRef.current;
    const logo = logoRef.current;
    state.current.isVisible = false;
    if (dot) dot.style.opacity = "0";
    if (logo) logo.style.opacity = "0";
  }, [dotRef, logoRef]);

  const handleMouseEnter = useCallback(() => {
    const logo = logoRef.current;
    state.current.isVisible = true;
    // Logo becomes visible again when cursor re-enters
    if (logo) logo.style.opacity = "1";
  }, [logoRef]);

  // ─── Magnetic elements ────────────────────────────────────────────────────
  const magneticCleanups = useRef<Array<() => void>>([]);

  const bindMagnetic = useCallback(() => {
    magneticCleanups.current.forEach((fn) => fn());
    magneticCleanups.current = [];

    if (typeof document === "undefined") return;

    const selector = magneticSelectors.join(", ");
    const elements = document.querySelectorAll<HTMLElement>(selector);

    elements.forEach((el) => {
      const onEnter = () => {
        const s = state.current;
        const dot = dotRef.current;
        const logo = logoRef.current;
        s.isHovering = true;
        if (logo) {
          logo.style.width = `${logoHoverSize}px`;
          logo.style.height = `${logoHoverSize}px`;
          logo.style.opacity = "1";
        }
        if (dot) {
          dot.style.transform = "translate(-50%,-50%) scale(0.45)";
          dot.style.background = "rgba(255,255,255,0.35)";
        }
      };

      const onLeave = () => {
        const s = state.current;
        const dot = dotRef.current;
        const logo = logoRef.current;
        s.isHovering = false;
        if (logo) {
          logo.style.width = `${logoSize}px`;
          logo.style.height = `${logoSize}px`;
          logo.style.opacity = "1"; // always keep visible
        }
        if (dot) {
          dot.style.transform = "translate(-50%,-50%)";
          dot.style.background = accentColor;
        }
        el.style.transform = "";
        el.style.transition = "transform 0.5s cubic-bezier(.23,1,.32,1)";
      };

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const pullX = (e.clientX - centerX) * 0.3;
        const pullY = (e.clientY - centerY) * 0.3;
        el.style.transform = `translate(${pullX}px, ${pullY}px)`;
        el.style.transition = "transform 0.15s ease";
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      el.addEventListener("mousemove", onMove);

      magneticCleanups.current.push(() => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.removeEventListener("mousemove", onMove);
        el.style.transform = "";
        el.style.transition = "";
      });
    });
  }, [
    magneticSelectors,
    logoSize,
    logoHoverSize,
    accentColor,
    dotRef,
    logoRef,
  ]);

  // ─── Main effect ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const styleTag = document.createElement("style");
    styleTag.id = "__custom-cursor-global";
    styleTag.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(styleTag);

    // Init logo position to center
    state.current.lx = window.innerWidth / 2;
    state.current.ly = window.innerHeight / 2;
    state.current.mx = window.innerWidth / 2;
    state.current.my = window.innerHeight / 2;

    // Logo starts visible at center
    const logo = logoRef.current;
    if (logo) {
      logo.style.left = `${state.current.lx}px`;
      logo.style.top = `${state.current.ly}px`;
      logo.style.opacity = "1";
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    state.current.rafId = requestAnimationFrame(animateLogo);

    bindMagnetic();

    const observer = new MutationObserver(bindMagnetic);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(state.current.rafId);
      clearTimeout(state.current.idleTimer);
      magneticCleanups.current.forEach((fn) => fn());
      magneticCleanups.current = [];
      observer.disconnect();
      styleTag.remove();
      document.documentElement.style.cursor = "";
    };
  }, [
    enabled,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    animateLogo,
    bindMagnetic,
    logoRef,
  ]);
}
