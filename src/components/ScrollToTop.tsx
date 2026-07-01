"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    const getElementForHash = (hashValue: string | null) => {
      if (!hashValue) return null;

      const id = hashValue.startsWith("#")
        ? decodeURIComponent(hashValue.slice(1))
        : decodeURIComponent(hashValue);

      return (
        document.getElementById(id) ??
        (() => {
          try {
            return document.querySelector(hashValue);
          } catch {
            return null;
          }
        })()
      );
    };

    const lenis = (window as any).lenis;

    if (hash) {
      // If there is a hash, scroll to top immediately, then smooth scroll to the hash after a short delay
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      const timer = setTimeout(() => {
        const element = getElementForHash(hash);
        if (element) {
          if (lenis) {
            lenis.scrollTo(element, { offset: 0, duration: 1.2 });
          } else {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // No hash: scroll to top immediately
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}