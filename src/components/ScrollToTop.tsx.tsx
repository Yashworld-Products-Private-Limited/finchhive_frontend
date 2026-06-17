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

    const element = getElementForHash(hash);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}