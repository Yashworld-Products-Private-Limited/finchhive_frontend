"use client";
import PrimaryButton from "@/components/Button";
import CaseStudies from "@/components/CaseStudies";
import { FeatureCard, FeatureItem } from "@/components/FeatureCard";
import LetsTalkSection from "@/components/LetsTalkSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessSection from "@/components/ProcessSection";
import ScrollVelocity from "@/components/ScrollVelocity";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import SEOAccordion from "@/components/SEOAccordion";
import ServicesSection from "@/components/ServicesSection";
import StatsFeatureSection from "@/components/StatsFeatureSection";
import { Marquee } from "@/components/ui/marquee";
import { FeaturesServices, testimonials } from "@/constants";
import FinIcon from "@/icons/finIcon";

import RadioIcon from "@/icons/Radio";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const avatars = [
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=15",
];

const Home = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getElementForHash = (hashValue: string | null) => {
      if (!hashValue) return null;

      const id = hashValue.startsWith("#")
        ? decodeURIComponent(hashValue.slice(1))
        : decodeURIComponent(hashValue);

      return (
        document.getElementById(id) ??
        (() => {
          try {
            return document.querySelector(hashValue);
          } catch {
            return null;
          }
        })()
      );
    };

    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      setTimeout(() => {
        const el = getElementForHash(hash);
        el?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    };

    scrollToHash();
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div>
      <section className="relative  flex items-center justify-center overflow-hidden">
        <div className="custom-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.18 }}
            className="relative z-10  space-y-7  text-center max-w-5xl mt-[130px] "
          >
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: -80,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className=" text-5xl sm:text-6xl md:text-7xl xl:text-[82px] tracking-[0%] heading leading-[42px] md:leading-[52px] xl:leading-[82px]"
            >
              The Best
              <motion.span
                initial={{
                  opacity: 0,
                  rotate: -12,
                  scale: 0.7,
                  y: -30,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: -3,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative inline-block px-1.5 lg:px-3 py-1 bg-[#2E2C76] text-white rotate-[-3deg] mx-4"
              >
                Digital
              </motion.span>
              <br />
              Platform
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -180,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.9,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative inline-flex items-center justify-center w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0 rotate-[340deg] bg-[#2E2C76] translate-y-3 p-2 translate-x-2.5 shadow-xl"
              >
                <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:scale-0">
                  <RadioIcon />
                </span>

                <span className="absolute opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <FinIcon />
                </span>
              </motion.span>{" "}
              Solution.
            </motion.h1>

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className=" text-black/70 subheading text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              We believe in combining innovative digital solutions, strategic
              thinking, and exceptional execution to turn your ideas into
              powerful digital experiences.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <PrimaryButton
                label="Let's Connect On Call"
                href="tel:+919537587467"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        // ref={sectionRef}
        className="relative w-full overflow-hidden flex items-center justify-center "
      >
        {/* <MagneticCursor containerRef={sectionRef} /> */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(46,44,118,0.3)_30%,rgba(46,44,118,0.7)_50%,#2E2C76_100%)]" />
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0">
          <ScrollVelocity
            texts={["the best digital platform solution"]}
            velocity={100}
            className="custom-scroll-text text-[90px] md:text-[160px] py-8 tracking-wide  text-white/20 heading select-none uppercase"
            numCopies={9}
            damping={80}
            stiffness={400}
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 w-[65%] mx-auto"
        >
          <Image
            src="/imgs/home_second.png"
            alt="Team"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </section>
      <section className="custom-container">
        <div className="max-w-[1440px] mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.45,
            }}
            className="hidden lg:flex relative cursor-pointer"
          >
            <div className="absolute -top-[106px] z-10 backdrop-blur-[0.8px] border-[1px] border-white  rounded-[48px] px-8 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.4)] before:absolute before:inset-0 before:rounded-[48px] before:bg-linear-to-br before:from-white/10 before:to-transparent before:pointer-events-none">
              <h1 className="font-light text-[#FFFFFF] lg:text-[20px] 2xl:text-[24px] uppercase leading-tight tracking-wide mb-5 drop-shadow-md subHeading">
                <span className="text-[#FFFFFD]">#1</span> Human psychology
                <br />
                Based Digital Solution
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden flex-shrink-0 ${
                        i !== 0 ? "-ml-3" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={`reviewer ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-orange-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#2E2C76] text-sm font-semibold tracking-wide">
                    200+ 5 Star Reviews
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-[80px] lg:mt-[150px] cursor-pointer">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Brands Collaborations" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Brands that trust us"
              />
            </div>
            <div className="mt-10">
              <LogoMarquee />
            </div>
          </div>

          <div className="mt-[80px] lg:mt-[100px] cursor-pointer">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="How We Work" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title=" Our 4 Stage Process"
              />
            </div>
            <div className="mt-16">
              <ProcessSection />
            </div>
          </div>
          <div id="services" className="scroll-mt-24 mt-[80px] lg:mt-[150px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <SectionBadge label="SERVICES" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title=" What we are offering"
              />
            </div>
            <div className="w-full mt-12 cursor-pointer">
              <ServicesSection />
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[150px]">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Why Choose Us" />
              <SectionTitle
                title={
                  <>
                    WHY FINCHHIVE IS YOUR <br />
                    DIGITAL GROWTH PARTNER
                  </>
                }
              />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch justify-between gap-4 mt-20"
            >
              {FeaturesServices.map((item: FeatureItem, i: number) => (
                <motion.div key={i} variants={cardVariants}>
                  <FeatureCard
                    title={item?.title}
                    description={item.description}
                    icon={item?.icon}
                    delay={i * 100}
                    isMiddle={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <div className="mt-[80px] lg:mt-[140px] ">
        <StatsFeatureSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="">
          <div
            id="case-studies"
            className="mt-[80px] lg:mt-[140px] space-y-12 lg:space-y-20"
          >
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Works" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Case Studies"
              />
            </div>
            <CaseStudies />
          </div>
          {/* <div
            id="testimonials"
            className="scroll-mt-25 mt-[80px] lg:mt-[100px]"
          >
            <div className="relative w-full flex items-start justify-center overflow-hidden  mx-auto ">
              <h1 className="absolute -top-10 text-[80px] md:text-[140px] xl:text-[150px] leading-normal font-bold text-black/10 select-none heading">
                TESTIMONIAL
              </h1>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-xl h-[400px] bg-[radial-gradient(circle_at_top,_rgba(46,64,150,1.80),_transparent_40%)] blur-2xl opacity-70 pointer-events-none" />

              <div className=" grid grid-cols-1   items-center justify-center gap-6 w-full max-w-lg h-[600px] ">
                <Marquee
                  vertical
                  // pauseOnHover
                  className="relative flex flex-col items-center justify-center gap-6 "
                >
                  {testimonials.map((item, i) => (
                    <div
                      key={i}
                      className="relative p-6 md:p-7 rounded-[24px] bg-white/20 border border-black/10 backdrop-blur-[0.6px] transition-all duration-500"
                    >
                      <div className="flex gap-1 mb-3 text-[#2E2C76]">
                        {"★★★★★".split("").map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-black/70 text-sm md:text-base leading-relaxed mb-5">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                        <img
                          src={item.img}
                          loading="lazy"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="text-black font-semibold text-sm">
                            {item.name}
                          </h4>
                          <p className="text-black/50 text-xs">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-[80px] lg:mt-[100px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {videos.map((item, i) => {
                const thumbnail = `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`;

                return (
                  <div
                    key={i}
                    className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/10 group cursor-pointer"
                    onClick={() => setActiveVideo(item.videoId)}
                  >
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[420px]">
                      <img
                        src={thumbnail}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                          <Play className="text-white w-6 h-6 ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-5 md:p-6">
                      <h3 className="text-white text-lg md:text-xl font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {activeVideo && (
              <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-3xl aspect-video">
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="absolute -top-10 right-0 text-white text-xl"
                  >
                    ✕
                  </button>

                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                    className="w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            <div className="flex items-center justify-center mt-8 lg:mt-12">
              <PrimaryButton label="VIEW ALL REVIEWS" />
            </div>
          </div> */}

          {/* <div className="mt-[100px] lg:mt-[160px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <SectionBadge label="Why us" />

              <SectionTitle className="" title=" Our Specialities" />
            </div>
            <div className="flex items-center justify-center lg:items-end lg:justify-end  mt-6 lg:mt-10">
              <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center lg:text-left max-w-2xl lg:ml-auto">
                Our top-notch digital marketing agency not only delivers
                impressive results but also dazzles our clients with remarkable
                statistics. We pride ourselves on our ability to amaze customers
                with tangible outcomes and eye-catching figures.
              </p>
            </div>
            <section className="grid grid-cols-1 items-center gap-6 py-12 ">
              <div className="flex flex-col md:flex-row gap-6 ">
                <div className="relative w-full lg:w-[70%] p-6 xl:p-8 flex items-end">
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-3xl"
                    style={{
                      backgroundImage: "url('/imgs/sem.jpg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-[#0a0a0a]/40 rounded-3xl" />
                  <div className="relative flex flex-col items-start justify-end mr-0">
                    <h1 className="text-[#FFFFFF] text-5xl md:text-7xl heading tracking-widest ">
                      150%
                    </h1>
                    <h2 className="text-[#FFFFFF] text-lg md:text-xl  tracking-wide heading">
                      Average Traffic Increase
                    </h2>
                    <p className="text-[#FFFFFF]/80 mt-6 text-sm md:text-base leading-relaxed subHeading max-w-2xl">
                      Our agency developed a content marketing plan for a
                      client, resulting in a significant increase in brand
                      visibility and recognition. As a result, the client
                      experienced an 80% increase in website traffic within six
                      months.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[30%] bg-black backdrop-blur-[1.1px] rounded-3xl p-6 xl:p-8 flex flex-col justify-between border">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <h1 className="text-[#FFFFFF] text-5xl md:text-7xl  heading">
                      $74M
                    </h1>
                    <h2 className="text-[#FFFFFF] text-lg md:text-xl tracking-wide heading">
                      Revenue Generated
                    </h2>
                  </div>

                  <p className="text-[#FFFFFF]/80 mt-6 text-sm md:text-base leading-relaxed max-w-xl subHeading">
                    Our agency developed a content marketing plan for a client,
                    resulting in a significant increase in brand visibility and
                    recognition. As a result, the client experienced an 80%
                    increase in website traffic within six months.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 ">
                <PhysicsPills />
                <div className="w-full lg:w-[55%] bg-transperant backdrop-blur-[1.1px] rounded-3xl p-8 xl:p-8 flex flex-col justify-between border">
                  <div className="flex flex-col justify-end items-start flex-wrap gap-4">
                    <h1 className="text-[#2E2C76] text-5xl md:text-7xl heading">
                      80%
                    </h1>
                    <h2 className="text-[#2E2C76] text-lg md:text-xl heading tracking-wide">
                      ENHANCED BRAND VISIBILITY
                    </h2>
                  </div>

                  <p className="text-[#2E2C76]/80 mt-6 text-sm md:text-base leading-relaxed max-w-xl subHeading">
                    Our agency developed a content marketing plan for a client,
                    resulting in a significant increase in brand visibility and
                    recognition. As a result, the client experienced an 80%
                    increase in website traffic within six months.
                  </p>
                </div>
              </div>
            </section>
          </div> */}
          <div className="mt-[100px] lg:mt-[140px] ">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Frequently Asked Questions" />
              <SectionTitle
                className="max-w-3xl mx-auto"
                title={<>Got Questions? We&apos;ve Got Answers!</>}
              />
            </div>
            <SEOAccordion />
          </div>
          <div className="mt-[100px] lg:mt-[160px] mb-[60px]">
            <LetsTalkSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
