"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Our Team Members", href: "/about#our-team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(68);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY < 10) {
        setShowNavbar(true);
      }
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={` fixed top-0 left-0 right-0 z-[999] py-1 transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${scrolled || menuOpen ? "bg-white/30 backdrop-blur-[6px]" : "bg-transparent"}`}
      >
        <div className="custom-container flex items-center">
          <div className="w-full flex items-center justify-between gap-2 xl:gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <div className="w-[140px] h-[50px] xl:w-[180px] xl:h-[65px] 2xl:w-[220px] 2xl:h-[75px] relative">
                <Image
                  src="/finchhivlogo.png"
                  alt="Finchhive Logo"
                  fill
                  sizes="(max-width: 1024px) 140px, 220px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-1 bg-[#332c77] border border-white/10 rounded-full px-2 py-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-sm 2xl:text-lg leading-6 uppercase px-2.5 2xl:px-3.5 py-2 rounded-full transition-all duration-200 subHeading
                                ${
                                  isActive
                                    ? "text-[#FFFFFF] bg-[#a7a5d0]/50"
                                    : "text-white hover:text-[#2E2C76] hover:bg-white/10"
                                }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/contactus"
              className="hidden lg:flex items-center gap-2 bg-[#2E2C76] text-white text-sm 2xl:text-sm  uppercase  px-6 py-3 rounded-full relative overflow-hidden group transition-all duration-300 ease-out flex-shrink-0 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,44,118,0.4)] active:translate-y-0 active:scale-95 heading"
            >
              <span className="relative z-10">Contact us</span>

              <svg
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                width="12"
                height="12"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M2 11L11 2M11 2H4.5M11 2V8.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
            </Link>

            <button
              className="lg:hidden relative z-[1000] flex flex-col justify-center gap-[5px] w-10 h-10 p-1.5 flex-shrink-0 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              <span
                className={`block h-0.5 w-full bg-[#2E2C76] rounded transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#2E2C76] rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#2E2C76] rounded transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed left-0 right-0 bottom-0 z-[998] lg:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: `${navHeight}px` }}
      >
        <div className="absolute inset-0 bg-[#05050f]/96 backdrop-blur-2xl" />

        <div
          className={`absolute top-16 left-8 w-48 h-48 rounded-full bg-[#2E2C76]/25 blur-3xl transition-all duration-700 ${
            menuOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-32 right-8 w-64 h-64 rounded-full bg-[#2E2C76]/15 blur-3xl transition-all duration-700 delay-150 ${
            menuOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />

        <div className="relative z-10 flex flex-col h-full px-8 pt-8 pb-12 overflow-y-auto">
          <div className="flex flex-col flex-1 justify-center gap-1">
            {navLinks.map((link, index) => (
              <div
                key={link.label}
                className={`transition-all duration-500 ${
                  menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{
                  transitionDelay: menuOpen ? `${index * 60 + 100}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-white/10 transition-all duration-200 ${
                    link.label === "Home"
                      ? "text-[#2E2C76]"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-white/20 font-mono w-5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl font-extrabold uppercase tracking-widest">
                      {link.label}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M2 11L11 2M11 2H4.5M11 2V8.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-500 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: menuOpen
                ? `${navLinks.length * 60 + 150}ms`
                : "0ms",
            }}
          >
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#2E2C76] hover:bg-[#3d3ab0] text-white text-sm font-bold uppercase tracking-widest py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2E2C76]/30 group"
            >
              Contact Us
              <svg
                width="12"
                height="12"
                viewBox="0 0 13 13"
                fill="none"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              >
                <path
                  d="M2 11L11 2M11 2H4.5M11 2V8.5"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
