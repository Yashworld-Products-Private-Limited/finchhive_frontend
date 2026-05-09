"use client";
import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "Our History",
    content: [
      "Founded in 2010 by digital marketing expert Emily Johnson, Celestial Solutions began as a small consultancy serving local businesses in the bustling city of New York. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.",

      "By 2015, Celestial Solutions had expanded its reach, serving clients across the United States and boasting a team of 15 talented professionals. The agency's client portfolio had grown to include a diverse range of industries, from e-commerce startups to established brick-and-mortar businesses. In 2020, Celestial Solutions celebrated its 10th anniversary with pride, having grown into a leading digital marketing agency with a global footprint. With offices in New York, London, and Sydney, the agency now serves clients around the world, supported by a team of over 50 experts specializing in SEO, social media marketing, content creation, website design, and more.",

      "As we look ahead to the next decade, Celestial Solutions remains committed to its founding principles of innovation, integrity, and excellence, continuing to empower businesses to thrive in the ever-evolving digital landscape.",
    ],
  },
  {
    id: 2,
    title: "Our Mission",
    content: [
      "Founded in 2010 by digital marketing expert Emily Johnson, Celestial Solutions began as a small consultancy serving local businesses in the bustling city of New York. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.",

      "By 2015, Celestial Solutions had expanded its reach, serving clients across the United States and boasting a team of 15 talented professionals. The agency's client portfolio had grown to include a diverse range of industries, from e-commerce startups to established brick-and-mortar businesses. In 2020, Celestial Solutions celebrated its 10th anniversary with pride, having grown into a leading digital marketing agency with a global footprint. With offices in New York, London, and Sydney, the agency now serves clients around the world, supported by a team of over 50 experts specializing in SEO, social media marketing, content creation, website design, and more.",

      "As we look ahead to the next decade, Celestial Solutions remains committed to its founding principles of innovation, integrity, and excellence, continuing to empower businesses to thrive in the ever-evolving digital landscape.",
    ],
  },
  {
    id: 3,
    title: "Our Vision",
    content: [
      "Founded in 2010 by digital marketing expert Emily Johnson, Celestial Solutions began as a small consultancy serving local businesses in the bustling city of New York. With a team of just three passionate individuals, the agency quickly gained traction, thanks to its innovative approach and dedication to client success.",

      "By 2015, Celestial Solutions had expanded its reach, serving clients across the United States and boasting a team of 15 talented professionals. The agency's client portfolio had grown to include a diverse range of industries, from e-commerce startups to established brick-and-mortar businesses. In 2020, Celestial Solutions celebrated its 10th anniversary with pride, having grown into a leading digital marketing agency with a global footprint. With offices in New York, London, and Sydney, the agency now serves clients around the world, supported by a team of over 50 experts specializing in SEO, social media marketing, content creation, website design, and more.",

      "As we look ahead to the next decade, Celestial Solutions remains committed to its founding principles of innovation, integrity, and excellence, continuing to empower businesses to thrive in the ever-evolving digital landscape.",
    ],
  },
];

export default function AboutSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleAccordion = (id: number) => {
  setOpenItems((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};

  return (
    <section className=" text-black py-12 md:py-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT (STATIC / STICKY) */}
        <div className="lg:sticky lg:top-20 h-fit">
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl subHeading leading-relaxed">
            Let’s get acquainted! We’re not your average digital marketing
            agency - we’re a team of passionate individuals who eat, sleep, and
            breathe creativity, innovation, and all things digital. At{" "}
            <span className="text-[#2E2C76] font-semibold">
              Celestial Solutions
            </span>
            , we’re on a mission to make your online{" "}
            <span className="text-[#2E2C76] font-semibold">
              dreams come true
            </span>
            , one pixel at a time! We’re a bunch of tech-savvy wizards, design
            enthusiasts, and social media mavens who believe that digital
            marketing should be fun, exciting, and downright awesome.
          </p>
        </div>

        {/* RIGHT CONTENT (SCROLLABLE) */}
        <div className=" overflow-y-auto pr-2 no-scrollbar">
          <div className="flex flex-col gap-4">
            {accordionData.map((item, index) => {
              const isOpen = openItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border  bg-white/5 backdrop-blur-md transition-all"
                >
                  {/* HEADER */}
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

                  {/* CONTENT */}
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
