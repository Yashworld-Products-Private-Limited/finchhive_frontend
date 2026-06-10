"use client";

import { faqs } from "@/constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SEOAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex items-center justify-center mt-16">
      <div className="w-full max-w-6xl space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              layout
              transition={{
                layout: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl overflow-hidden bg-[#2E2C76]"
            >
              <div
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className="text-white font-semibold text-lg leading-snug pr-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 360 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E2C76"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2E2C76"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      height: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pl-10"
                    >
                      <p
                        className="leading-relaxed text-base"
                        style={{
                          color: "#b0b0b0",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
