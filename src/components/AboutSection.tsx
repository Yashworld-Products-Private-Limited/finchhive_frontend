"use client";
import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    id: 1,
    title: "What is Finchhive",
    content: [
      "FINCHHIVE combines strategy, technology, creativity, and performance into one integrated business solution.",

      "Inspired by the Finch agile, adaptive, and intelligent and the Hive collaborative, structured, and scalable FINCHHIVE functions as a modern digital growth ecosystem for ambitious brands.",

      "Every solution is intentional.",
      " Every platform is connected.",
      " Every system is built to scale.",
    ],
  },
  {
    id: 2,
    title: "Our Mission",
    content: [
      "To help businesses transform digitally through intelligent systems, high-performance marketing, creative storytelling, and scalable digital infrastructure that drives long-term growth.",
    ],
  },
  {
    id: 3,
    title: "Our Vision",
    content: [
      "To become a globally recognized digital platform solutions company known for building scalable digital ecosystems, powerful brands, and future-ready businesses through innovation, strategy, creativity, and technology.",
    ],
  },
];

export default function AboutSection() {
  const [openItems, setOpenItems] = useState<number[]>(
    accordionData.length ? [accordionData[0].id] : [],
  );

  const toggleAccordion = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className=" text-black py-12 md:py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="lg:sticky lg:top-20 h-fit "
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed"
          >
            A Full-Service Digital Platform Solutions Company Built for Scale
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed"
          >
            FINCHHIVE is a premium digital platform solutions provider built for
            brands and businesses that demand innovation, scalability,
            performance, and long term digital growth. <br />
            <span className="text-[#2E2C76] font-semibold text-center">
              We don’t just offer services.
            </span>
            <br />
            <span className="text-[#2E2C76] font-semibold">
              We build digital ecosystems.
            </span>
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed"
          >
            In today’s fast-moving digital world, businesses need more than
            marketing they need systems, technology, strategy, branding and
            digital infrastructure that work together seamlessly. That’s where
            FINCHHIVE operates.
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed"
          >
            From digital platforms and branding to marketing and scalable growth
            systems, we help businesses create a powerful and future ready
            digital presence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className=" overflow-y-auto pr-2 no-scrollbar"
        >
          <div className="flex flex-col gap-4">
            {accordionData.map((item, index) => {
              const isOpen = openItems.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="rounded-2xl border  bg-white/5 backdrop-blur-md transition-all"
                >
                  <div
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left  rounded-xl"
                  >
                    <span className="flex items-center gap-3 text-lg md:text-xl lg:text-2xl heading">
                      <span
                        className={`${
                          isOpen ? "text-[#2E2C76]" : "text-[#2E2C76]"
                        } font-medium`}
                      >
                        {`0${index + 1}.`} {item.title}
                      </span>
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 flex items-center justify-center rounded-md transition ${
                        isOpen
                          ? "bg-[#2E2C76] text-white"
                          : "bg-[#2E2C76] text-white"
                      }`}
                    >
                      {isOpen ? "×" : "+"}
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm md:text-base lg:text-lg subHeading text-gray-700 leading-relaxed space-y-3">
                          {item.content.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
