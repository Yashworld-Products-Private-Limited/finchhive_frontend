"use client";

import { useEffect, useRef, useState } from "react";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function BaggyFooter() {
  const { ref, inView } = useInView(0.2);

  return (
    <footer className="w-full flex items-center justify-center py-10 px-4 subHeading">
      <div
        ref={ref}
        className="relative w-full bg-[#101010] rounded-2xl overflow-hidden lg:h-[580px] xl:h-[550px]"
        style={{ minHeight: 420 }}
      >
        {[
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} w-5 h-5 rounded-full border-2 border-[#3a3835] bg-[#FFFFFF] shadow-inner block z-10`}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:items-start md:justify-between md:text-left px-6 py-10 sm:px-8 md:px-14 md:pt-10">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start">
            <h2
              className={` text-white heading leading-[60px] tracking-tight transition-all duration-700 ease-out text-[52px] sm:text-[60px] md:text-4xl lg:text-5xl ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} `}
              style={{ transitionDelay: "80ms" }}
            >
              Contacts
            </h2>

            <a
              href="mailto:client@teststudio.com"
              className={`inline-flex items-center gap-1 text-[#bcbae9] underline underline-offset-2 hover:opacity-80 transition-all duration-700 ease-out md:ml-3 text-base `}
            >
              client@teststudio.com
              <ArrowIcon />
            </a>
          </div>

          {/* RIGHT */}
          <div className=" flex flex-col items-center md:items-end mt-14 md:mt-0 gap-6 md:gap-3">
            {/* SOCIALS */}

            {/* COPYRIGHT */}
            <span
              className={` text-[#6b6963] transition-all duration-700 ease-out text-xs lg:text-sm ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} `}
              style={{ transitionDelay: "120ms" }}
            >
              © 2026 Finchhive all rights reserved
            </span>
            <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-3">
              {socialLinks.map(({ label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  className={` inline-flex items-center gap-0.5 text-white hover:text-[#2E2C76] transition-all duration-700 ease-out :text-base ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} `}
                  style={{ transitionDelay: `${180 + idx * 60}ms` }}
                >
                  {label}
                  <ArrowIcon />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none flex justify-center"
          aria-hidden
        >
          <WatermarkText inView={inView} />
        </div>
      </div>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <path
        d="M2 9L9 2M9 2H3.5M9 2V7.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WatermarkText({ inView }: { inView: boolean }) {
  return (
    <h1
      className={` w-full text-center text-[#2e2c2a]  uppercase transition-all duration-1000 ease-out heading leading-none tracking-[1%] whitespace-nowrap text-[clamp(40px,14vw,140pc)] ${inView ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-14"}`}
    >
      Finchhive
    </h1>
  );
}
