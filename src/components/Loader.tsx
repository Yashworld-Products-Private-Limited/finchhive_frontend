"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      const timer = setTimeout(() => setLoading(false), 2500); // safety fallback
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -30, 
            transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07070c]"
        >
          {/* Ambient Glowing Background Orb */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-[#2E2C76]/20 blur-[90px] animate-pulse pointer-events-none" />

          {/* Loader Elements Container */}
          <div className="relative flex flex-col items-center gap-6">
            
            {/* Double Concentric Spinner */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer Spin Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-2 border-b-2 border-r-2 border-transparent border-t-[#2E2C76] border-b-[#2E2C76] filter drop-shadow-[0_0_10px_rgba(46,44,118,0.5)]"
              />
              
              {/* Inner Reverse Spin Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                className="absolute w-26 h-26 rounded-full border-l border-r border-t border-b border-transparent border-l-white/10 border-r-white/10"
              />
              
              {/* Central Pulsing Logo */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.85, 1.05, 0.85], opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="relative w-14 h-14 flex items-center justify-center"
              >
                <Image
                  src="/api/finchhivlogo.png"
                  alt="Finchhive Logo"
                  width={56}
                  height={56}
                  className="object-contain filter invert brightness-200"
                  priority
                />
              </motion.div>
            </div>

            {/* Glowing Brand Label */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <motion.span
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="heading text-white text-xs uppercase tracking-[0.3em] font-extrabold text-center pl-[0.3em]"
              >
                FINCHHIVE
              </motion.span>
              
              {/* Sliding Progress Line */}
              <div className="w-20 h-[1.5px] bg-[#2E2C76]/30 relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#2E2C76]"
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
