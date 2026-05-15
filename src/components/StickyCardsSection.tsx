"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleCheck } from "lucide-react";
import PrimaryButton from "./Button";
import { AnimationCard } from "./AnimationCard";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Content Creation",
    animation: "/lottie/two.json",
    desc: "Short-form videos and visuals designed to capture attention and engage the right audience.",
    points: [
      "Short-form video production",
      "Branded social visuals",
      "Content calendar planning",
    ],
  },
  {
    title: "Social Management",
    animation: "/lottie/three.json",
    desc: "Reach the right audience, boost engagement, and grow your brand with targeted campaigns.",
    points: [
      "Post scheduling & publishing",
      "Community engagement",
      "Performance tracking",
    ],
  },
  {
    title: "Paid Advertising",
    animation: "/lottie/one.json",
    desc: "Manage, schedule, and engage across all your social channels effortlessly and stay consistently connected.",
    points: [
      "Targeted ad campaigns",
      "Audience research",
      "Ad performance optimization",
    ],
  },
];

export default function StickyCardsSection() {
  const wrappersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrappers = wrappersRef.current;

    wrappers.forEach((wrapper, index) => {
      if (!wrapper) return;

      const card = wrapper.querySelector(".card");

      if (!card) return;

      if (index === wrappers.length - 1) {
        gsap.set(card, {
          opacity: 1,
          scale: 1,
        });

        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.set(card, {
        opacity: 1,
        scale: 1,
      }).to(
        card,
        {
          opacity: 0,
          scale: 0.9,
          ease: "none",
        },
        0.01,
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-10">
      {cards.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            wrappersRef.current[index] = el;
          }}
          className={`
            relative mx-auto w-[95%] pt-[12vh] ${index === cards.length - 1 ? "h-[65vh] pb-[12vh]" : "h-[60vh]"}
          `}
        >
          <div className=" card grid h-[55vh] grid-cols-1 overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-[#FFFFFF] shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:grid-cols-2 p-4 lg:p-6">
            <div className=" relative flex items-center justify-center bg-[#e9e9e9] rounded-[28px]">
              <div className="relative flex items-center justify-center">
                <AnimationCard path={item.animation} />
              </div>
            </div>

            <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8">
              <h2 className="text-[28px] md:text-[32px] lg:text-[38px] leading-none tracking-[0.5px] text-[#2E2C76] heading">
                {item.title}
              </h2>

              <p className=" mt-5 max-w-[540px] text-[16px] lg:text-[18px] leading-[1.7] text-[#666] ">
                {item.desc}
              </p>

              <div className="mt-8 space-y-4">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#555]">
                    <CircleCheck className="h-5 w-5 text-[#2E2C76]" />

                    <span className="text-[14px] sm:text-[16px]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-10">
                <PrimaryButton
                  label="Let's Connect"
                  className="text-[14px] 2xl:text-[16px] leading-3.5 tracking-[1%] uppercase px-6 py-3 "
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
