"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is SEO and why is it important?",
    answer:
      "SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions.",
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most websites begin to see noticeable improvements in 3 to 6 months, but significant results often take 6 to 12 months depending on competition, domain authority, and the quality of work done.",
  },
  {
    id: 3,
    question: "What are the key factors that influence SEO rankings?",
    answer:
      "Key ranking factors include content quality and relevance, backlinks from authoritative sites, page speed and Core Web Vitals, mobile-friendliness, on-page optimization (title tags, meta descriptions, headings), and technical SEO elements like site structure and crawlability.",
  },
  {
    id: 4,
    question: "Do I need to hire an SEO agency, or can I do SEO myself?",
    answer:
      "You can absolutely do SEO yourself, especially for smaller sites with the right resources and learning investment. However, an SEO agency brings expertise, tools, and bandwidth that can accelerate results. The decision depends on your budget, time, and complexity of your goals.",
  },
  {
    id: 5,
    question: "How much does SEO cost?",
    answer:
      "SEO costs vary widely. Freelancers may charge $500–$2,000/month, while agencies range from $1,500–$10,000+/month depending on the scope. One-time audits and project-based work can range from $500 to $5,000. The investment should align with your business goals and competition level.",
  },
  {
    id: 6,
    question: "What is SEO and why is it important?",
    answer:
      "SEO, or Search Engine Optimization, is the process of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It's important because it helps businesses attract organic traffic, increase their online visibility, and ultimately drive more leads and conversions.",
  },
  {
    id: 7,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most websites begin to see noticeable improvements in 3 to 6 months, but significant results often take 6 to 12 months depending on competition, domain authority, and the quality of work done.",
  },
];

export default function SEOAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="w-full flex items-center justify-center mt-16"
    >
      <div className="w-full max-w-6xl space-y-3">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 bg-[#2E2C76]"
            >
              {/* Header */}
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

                {/* Icon Button */}
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  {isOpen ? (
                    // Up chevron
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
                    // Down chevron
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

              {/* Answer Panel */}
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
            </div>
          );
        })}
      </div>
    </div>
  );
}