"use client";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 2.5, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Successful Projects" },
  { value: 20, suffix: "+", label: "Happy Clients" },
];

const features = [
  {
    title: "Proven Track Record",
    description:
      "We have built a reputation as a trusted and reliable partner in achieving business success.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.98 14.98 0 00-5.958 12.12A14.98 14.98 0 0015.36 15.36m-5.841-2.58a14.926 14.926 0 002.58-5.841"
        />
      </svg>
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "We offer personalized solutions tailored to your specific goals, audience, and industry.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
        />
      </svg>
    ),
  },
  {
    title: "Client-Centric Focus",
    description:
      "Your success is our priority. We prioritize understanding your business goals.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
];

const items = [
  "Continuous Innovation",
  "Dedicated Support",
  "Positive Client Experiences",
  "Commitment to Excellence",
];

// ── Count-up hook ──────────────────────────────────────────────
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const isDecimal = target % 1 !== 0;
      const currentVal = progress * target;
      if (isDecimal) {
        setCount(parseFloat(currentVal.toFixed(1)));
      } else {
        setCount(Math.floor(currentVal));
      }
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
}

// ── Stat circle ────────────────────────────────────────────────
function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const count = useCountUp(value, 2000);

  return (
    <div className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full bg-white/5 backdrop-blur-sm">
      <span className="text-4xl font-black text-white leading-none heading">
        {count}
        {suffix}
      </span>
      <span className="text-[14px] lg:text-[16px] text-white/60 text-center mt-1 px-3 leading-tight ">
        {label}
      </span>
    </div>
  );
}

// ── Feature card (bottom) ──────────────────────────────────────
function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  isMiddle: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center px-4 lg:px-4 py-4 lg:py-4 relative group cursor-pointer border border-white/15 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-[32px]">
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-2xl bg-white/15 blur-md scale-110 group-hover:scale-125 transition-transform duration-500" />
        <div className="relative w-[68px] h-[68px] rounded-[18px] border border-white/20 flex items-center justify-center text-white ">
          {icon}
        </div>
      </div>
      <h3 className="text-white text-lg lg:text-xl mb-3 tracking-tight leading-snug subHeading">
        {title}
      </h3>
      <p className="text-white/55 text-sm lg:text-lg leading-5 max-w-sm subHeading">
        {description}
      </p>
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────
export default function StatsFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    let $el: any = null;

    Promise.all([
      import("jquery"),
      // @ts-ignore
      import("jquery.ripples"),
    ]).then(([jqueryModule]) => {
      const $ = jqueryModule.default;
      $el = $(sectionRef.current!);
      if (typeof ($el as any).ripples === "function") {
        ($el as any).ripples({
          resolution: 256,
          perturbance: 0.01,
        });
      }
    }).catch((err) => {
      console.error("Failed to initialize ripples:", err);
    });

    return () => {
      if ($el && typeof $el.ripples === "function") {
        try {
          $el.ripples("destroy");
        } catch (err) {
          console.error(err);
        }
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col overflow-hidden px-[16px] bg-cover bg-bottom bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/api/imgs/ourwork.jpg')",
      }}
    >
      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(46, 44, 118, 0.83) 0%, rgba(46, 44, 118, 0.6) 35%, rgba(0, 0, 0.5, 1) 100%)",
        }}
      /> */}

      <div className="relative z-10 flex flex-col items-center justify-between py-6 w-full gap-40 md:h-[100dvh] ">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center -gap-4 ">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                {...feature}
                isMiddle={i === 1}
              />
            ))}
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4 py-6">
            {items.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/90 text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-[#2E2C76] text-xl">✦</span>
                <span className="whitespace-nowrap">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
