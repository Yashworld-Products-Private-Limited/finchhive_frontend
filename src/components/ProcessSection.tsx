"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    title: "Discovery & Digital Understanding",
    desc: "Every successful digital ecosystem starts with deep understanding. At FINCHHIVE, we begin by analyzing your brand, audience behavior, business goals, industry positioning, and digital presence. We study how your audience thinks, interacts, consumes content, and makes decisions across platforms.",
    points: [
      "Growth opportunities",
      "Brand gaps",
      "Audience psychology",
      "Platform potential",
      "Competitive positioning",
      "Before building systems, we understand people.",
    ],
  },
  {
    title: "Strategy & Growth Architecture",
    desc: "Once the foundation is clear, we design a customized digital growth architecture tailored specifically for your business.",
    points: [
      "Brand positioning strategy",
      "Platform-specific planning",
      "Content & communication systems",
      "Marketing funnels & lead flow",
      "Visual direction & brand identity",
      "Scalable digital solutions",
      "Every strategy is built for long-term scalability, not short-term visibility.",
    ],
  },
  {
    title: "Creative Execution & Digital Deployment",
    desc: "This is where ideas transform into powerful digital experiences. Our team executes every part of the strategy with precision, creativity, and performance in mind.",
    points: [
      "Website & landing page development",
      "High-impact reel creation",
      "Performance marketing campaigns",
      "Brand storytelling content",
      "Social media systems",
      "Creative design & visuals",
      "Multi-platform deployment",
      "Every piece of content, design, and marketing is created to strengthen your brand authority digitally.",
    ],
  },
  {
    title: "Optimization, Scaling & Performance Growth",
    desc: "Digital growth is never static — it evolves constantly. FINCHHIVE continuously tracks performance, audience behavior, engagement patterns, and campaign data to optimize and scale results.",
    points: [
      "Performance analysis",
      "Audience insights",
      "Conversion optimization",
      "Growth scaling",
      "Platform adaptation",
      "ROI-driven improvements",
      "Our goal isn’t just execution.",
      "It’s sustainable digital growth built for the future.",
    ],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="max-w-4xl mx-auto  lg:px-6">
      <div className="relative">
        <div className="absolute left-[22px] top-0 w-[2px] h-full bg-blue-100">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#2E2C76] to-blue-300"
          />
        </div>

        <div className="flex flex-col gap-8 md:gap-10 xl:gap-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className=" rounded-full bg-[#eeeef4]  flex items-center justify-center text-[#2E2C76] text-4xl md:text-6xl font-bold leading-none p-2 -translate-x-1/4">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex-1 rounded-2xl bg-[#eeeef4] border border-blue-100 p-4 md:p-6 shadow-md space-y-2 lg:space-y-4">
                <div className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs px-3 py-1 rounded-full">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg md:text-2xl heading text-[#111827]">
                  {step.title}
                </h3>

                <p className="text-gray-600 subHeading leading-relaxed text-sm md:text-base lg:text-lg">
                  {step.desc}
                </p>

                {step.points && (
                  <>
                    <AnimatePresence>
                      {openSteps.includes(i) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-1 lg:gap-2 pt-1 lg:pt-2">
                            {step.points.map((point, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="min-w-2 h-2 rounded-full bg-[#2E2C76] mt-2" />
                                <p className="text-xs md:text-sm lg:text-base subHeading leading-relaxed">
                                  {point}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() =>
                        setOpenSteps((prev) =>
                          prev.includes(i)
                            ? prev.filter((item) => item !== i)
                            : [...prev, i],
                        )
                      }
                      className="mt-3 text-[#2E2C76] font-semibold text-sm hover:underline"
                    >
                      {openSteps.includes(i) ? "See Less" : "See More"}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
