"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What is Finchhive?",
    answer:
      "Finchhive is a creative growth agency focused on branding, content creation, social media marketing, performance marketing, websites, and digital growth solutions for modern businesses.",
  },
  {
    id: 2,
    question: "What services does Finchhive provide?",
    answer:
      "Brand Strategy & Positioning, Social Media Management, Content Creation, Meta & Google Ads, Website Development, Photography & Videography, Creative Campaigns, Marketing Consultation",
  },
  {
    id: 3,
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, local brands, creators, cafés, fashion labels, real estate businesses, and growing companies looking to build a strong digital presence.",
  },
  {
    id: 4,
    question: "Can Finchhive handle both content creation and marketing?",
    answer:
      "Absolutely. From shooting content to running ads and managing social media, we provide end-to-end creative and marketing solutions.",
  },
  {
    id: 5,
    question: "How long does it take to see results?",
    answer:
      "Results depend on the project and goals, but most brands start noticing better engagement, reach, and visibility within the first few weeks of consistent strategy and execution.",
  },
  {
    id: 6,
    question: "Do you provide customized marketing plans?",
    answer:
      "Yes. Every business is different, so we create customized strategies based on your brand goals, audience, and industry.",
  },
  {
    id: 7,
    question: "Can Finchhive manage my social media accounts completely?",
    answer:
      "Yes. We can handle planning, designing, posting, content shoots, reels, captions, ad campaigns, and audience engagement.",
  },
  {
    id: 8,
    question: "Do you offer website design and development?",
    answer:
      "Yes. We create modern, responsive, and conversion-focused websites tailored to your brand identity and business needs.",
  },
  {
    id: 9,
    question: "How can I start working with Finchhive?",
    answer:
      "Simply contact us through Instagram, WhatsApp, or email, and our team will guide you through the process.",
  },
  {
    id: 10,
    question: "Why choose Finchhive?",
    answer:
      "Because we combine creativity, strategy, and execution to help brands grow with impactful visuals, strong branding, and performance-driven marketing.",
  },
];

export default function SEOAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const accordionVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="w-full flex items-center justify-center mt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl space-y-3"
      >
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <motion.div
              key={faq.id}
              variants={accordionVariants}
              className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#2E2C76]"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span
                  className="text-white font-semibold text-lg leading-snug pr-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {faq.question}
                </span>

                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: "#FFFFFF" }}
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
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pl-10">
                  <p
                    className="leading-relaxed text-base"
                    style={{
                      color: "#b0b0b0",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
