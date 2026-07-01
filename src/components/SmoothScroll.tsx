"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    // Register scroll trigger if not already registered
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like easing curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Expose lenis instance globally
    (window as any).lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Sync Lenis scroll with GSAP Ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Handle hash links / anchor clicks smoothly via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      
      // Check for direct ID hash e.g., href="#services"
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          lenis.scrollTo(targetElement as HTMLElement);
        }
      } else if (href && href.includes("#")) {
        // Check for page-relative hash links e.g., href="/#services" or href="/about#our-team"
        try {
          const url = new URL(link.href, window.location.href);
          if (
            url.origin === window.location.origin &&
            url.pathname === window.location.pathname
          ) {
            const hash = url.hash;
            if (hash) {
              e.preventDefault();
              const targetElement = document.querySelector(hash);
              if (targetElement) {
                lenis.scrollTo(targetElement as HTMLElement);
              }
            }
          }
        } catch {
          // Ignore invalid URL parsing
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Check on load if window has hash and scroll to it
    if (window.location.hash) {
      setTimeout(() => {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          lenis.scrollTo(targetElement as HTMLElement);
        }
      }, 500);
    }

    return () => {
      gsap.ticker.remove(updateTicker);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return null;
}
