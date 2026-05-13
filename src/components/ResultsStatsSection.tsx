"use client";

import { useEffect, useRef, useState } from "react";
import PrimaryButton from "./Button";

const stats = [
  {
    title: "Total Views",
    desc: "Audience-first short-form content that consistently reaches people at scale across platforms.",
    value: 9.0,
    suffix: "M",
  },
  {
    title: "Total Likes",
    desc: "High-engagement content built to spark interaction, saves, and shares.",
    value: 2.5,
    suffix: "M",
  },
  {
    title: "Revenue Generated",
    desc: "Social campaigns that turned audience attention into real sales and conversions.",
    value: 5.0,
    prefix: "$",
    suffix: "M",
  },
];

function Counter({
  end,
  prefix = "",
  suffix = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div ref={ref}>
      {prefix}
      {count.toFixed(1)}
      {suffix}
    </div>
  );
}

export default function ResultsStatsSection() {
  return (
    <section className="py-16">
        <div className="flex flex-col">
          {stats.map((item, index) => (
            <div
              key={index}
              className={` grid grid-cols-1 gap-8 py-10 md:grid-cols-2 md:items-center lg:py-14
                ${index !== stats.length - 1 ? "border-b border-[#cfcfcf]" : ""}
              `}
            >
              {/* Left */}
              <div className="max-w-[500px]">
                <h3 className=" text-[30px] heading leading-[1.1] tracking-[0.4px] text-[#2E2C76] sm:text-[36px] lg:text-[42px]">
                  {item.title}
                </h3>

                <p className=" mt-4 text-[16px] leading-[1.3] text-[#5e5e5e sm:text-[18px] subHeading">
                  {item.desc}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center justify-start md:justify-end">
                <h2 className=" flex items-start font-black leading-none tracking-[-3px] text-[#1b1b1b text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px]">
                  <Counter
                    end={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />

                  <span className=" ml-2 text-[#2E2C76] text-[0.7em] leading-none">
                    +
                  </span>
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 flex justify-center">
          <PrimaryButton label="Let's Connect" />
        </div>
    </section>
  );
}
