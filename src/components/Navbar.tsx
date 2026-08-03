"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Our Team", href: "/about#our-team" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/finchhive/" },
  { label: "Threads", href: "https://www.threads.com/@finchhive" },
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
      } else if (currentScrollY > lastScrollY) {
        if (!menuOpen) {
          setShowNavbar(false);
        }
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-[1021] py-1 transition-all duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${scrolled && !menuOpen ? "bg-white/30 backdrop-blur-[6px]" : "bg-transparent"}`}
      >
        <div className="custom-container flex items-center">
          <div className="w-full flex items-center justify-between gap-2 xl:gap-4">
            {/* Logo Left - hover opens the menu dropdown */}
            <button
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
              className="focus:outline-none cursor-pointer relative z-[1022]"
              aria-label="Toggle menu"
            >
              <div className="w-[140px] h-[50px] xl:w-[180px] xl:h-[65px] 2xl:w-[220px] 2xl:h-[75px] relative">
                <Image
                  src="/api/finchhivlogo.png"
                  alt="Finchhive Logo"
                  fill
                  sizes="(max-width: 1024px) 140px, 220px"
                  className="object-contain"
                  priority
                />
              </div>
            </button>

            {/* Empty Center & Right - No button in the corner */}
            <div className="flex-1" />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay to close on click outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[1019] bg-black/20 backdrop-blur-[2px]"
            />

            {/* Floating Dropdown under Logo */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed top-[75px] left-4 md:left-[5%] z-[1020] w-[90vw] max-w-[350px] max-h-[50vh] bg-[#0c0c16]/96 backdrop-blur-2xl rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.65)] p-5 flex flex-col justify-between overflow-y-auto select-none"
            >
              {/* Background Ambient Orb */}
              <div className="absolute top-8 right-4 w-40 h-40 rounded-full bg-[#2E2C76]/25 blur-[50px] pointer-events-none" />

              <div className="flex flex-col relative z-10">
                {/* Navigation Links */}
                <nav className="flex flex-col gap-2.5">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1">
                    Menu
                  </div>
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="group flex items-center justify-between text-lg font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 py-1"
                        >
                          <span className="relative overflow-hidden inline-block">
                            <span
                              className={`relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1 ${isActive ? "text-white" : ""}`}
                            >
                              {link.label}
                            </span>
                          </span>
                          <svg
                            className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-indigo-400"
                            viewBox="0 0 13 13"
                            fill="none"
                          >
                            <path
                              d="M2 11L11 2M11 2H4.5M11 2V8.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </div>
                    );
                  })}
                </nav>

                {/* Contact Us Button inside Dropdown */}
                <div className="mt-5">
                  <Link
                    href="/contactus"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-[#2E2C76] text-xs uppercase py-2.5 rounded-full relative overflow-hidden group transition-all duration-300 ease-out hover:shadow-[0_8px_20px_rgba(46,44,118,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 heading font-bold text-white"
                  >
                    <span className="relative z-10">Contact us</span>
                    <svg
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      width="10"
                      height="10"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M2 11L11 2M11 2H4.5M11 2V8.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
                  </Link>
                </div>
              </div>

              {/* Footer Info inside Dropdown */}
              <div className="flex flex-col gap-2.5 border-t border-white/5 pt-3.5 mt-5 relative z-10">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-[8px] font-mono uppercase tracking-widest text-white/30">
                      Get in touch
                    </div>
                    <a
                      href="mailto:grow@finchhive.com"
                      className="text-xs font-semibold text-white hover:text-indigo-400 transition-colors duration-200"
                    >
                      grow@finchhive.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="text-[8px] font-mono uppercase tracking-widest text-white/30">
                      Follow Us
                    </div>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="text-[10px] text-neutral-400 hover:text-white transition-colors duration-200"
                        >
                          {social.label === "Instagram" ? "IG" : "TH"}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-[9px] text-neutral-500 leading-normal text-center">
                  © 2026 Finchhive. Designed & Developed by Yashworld.
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
