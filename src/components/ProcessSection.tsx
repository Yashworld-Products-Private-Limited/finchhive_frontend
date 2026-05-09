"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery Phase",
    desc: "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
  },
  {
    title: "Strategy Development",
    desc: "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively.",
  },
  {
    title: "Implementation and Execution",
    desc: "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency, whether it's optimizing your website for search engines, crafting engaging social media content, or designing captivating visuals.",
  },
  {
    title: "Monitoring and Optimization",
    desc: "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="max-w-2xl mx-auto lg:px-6">
      <div className="relative flex">
        <div className="absolute left-6 top-0 w-[2px] h-full bg-blue-100">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 to-blue-300"
          />
        </div>

        <div className="flex flex-col gap-20 w-full pl-6 sm:pl-8 md:pl-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start md:gap-6"
            >
              <div className="min-w-[60px] text-4xl subHeading text-[#2E2C76]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 rounded-2xl bg-white/10 backdrop-blur-[0.4px] border border-blue-100 p-3 md:p-6 shadow-md space-y-3 md:space-y-5">
                <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs  tracking-[0%]  px-2 py-1 rounded-full">
                  STEP {String(i + 1).padStart(2, "0")}
                </h6>
                <h3 className="text-xl heading mb-2">{step.title}</h3>
                <p className="text-gray-600 subHeading">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
