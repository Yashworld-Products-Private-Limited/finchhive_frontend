"use client";
import { useEffect, useRef, useState } from "react";

import {
  Rocket,
  Share2,
  Target,
  MessageSquare,
  HeartHandshake,
  Atom,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-6 h-6 text-[#2E2C76]" />,
  network: <Share2 className="w-6 h-6 text-[#2E2C76]" />,
  focus: <Target className="w-6 h-6 text-[#2E2C76]" />,
  chat: <MessageSquare className="w-6 h-6 text-[#2E2C76]" />,
  support: <HeartHandshake className="w-6 h-6 text-[#2E2C76]" />,
  atom: <Atom className="w-6 h-6 text-[#2E2C76]" />,
};

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({
  title,
  description,
  icon,
  delay,
  isMiddle,
}: {
  title: string;
  description: string;
  icon: string;
  delay: number;
  isMiddle?: boolean;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-4 lg:px-4 py-4 lg:py-4 relative group cursor-pointer transition-all duration-700 border border-white/15 bg-blue-400/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300 rounded-[32px]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-2xl bg-white/5 blur-md scale-110 group-hover:scale-125 transition-transform duration-500" />
        <div className="relative w-[68px] h-[68px] rounded-[18px] border border-[#2E2C76] flex items-center justify-center">
          {iconMap[icon]}
        </div>
      </div>
      <h3 className="text-[#2E2C76]  text-lg lg:text-xl mb-3  leading-snug heading">
        {title}
      </h3>
      <p className="text-gray-600 text-sm lg:text-lg leading-5 max-w-sm  subHeading">
        {description}
      </p>
    </div>
  );
}
