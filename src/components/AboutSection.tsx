"use client";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is Finchhive",
    content: [
      "FINCHHIVE combines strategy, technology, creativity, and performance into one integrated business solution.",

      "Inspired by the Finch — agile, adaptive, and intelligent — and the Hive — collaborative, structured, and scalable — FINCHHIVE functions as a modern digital growth ecosystem for ambitious brands.",

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
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAccordion = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className=" text-black py-12 md:py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="lg:sticky lg:top-20 h-fit ">
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed">
            A Full-Service Digital Platform Solutions Company Built for Scale
          </p>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed">
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
          </p>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed">
            In today’s fast-moving digital world, businesses need more than
            marketing they need systems, technology, strategy, branding and
            digital infrastructure that work together seamlessly. That’s where
            FINCHHIVE operates.
          </p>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed">
            From digital platforms and branding to marketing and scalable growth
            systems, we help businesses create a powerful and future ready
            digital presence.
          </p>
        </div>

        <div className=" overflow-y-auto pr-2 no-scrollbar">
          <div className="flex flex-col gap-4">
            {accordionData.map((item, index) => {
              const isOpen = openItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border  bg-white/5 backdrop-blur-md transition-all"
                >
                  <button
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

                    <span
                      className={`w-8 h-8 flex items-center justify-center rounded-md transition ${
                        isOpen
                          ? "bg-[#2E2C76] text-white"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm md:text-base lg:text-lg subHeading text-gray-700 leading-relaxed space-y-3">
                      {item.content.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
