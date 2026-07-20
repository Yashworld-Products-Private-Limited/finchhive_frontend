"use client";
import PrimaryButton from "@/components/Button";
import { FeatureCard, FeatureItem } from "@/components/FeatureCard";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import { FeaturesServices } from "@/constants";
import FinIcon from "@/icons/finIcon";
import RadioIcon from "@/icons/Radio";
import { motion, Variants } from "framer-motion";
import { Pause, Play, Volume2, VolumeOff } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const LetsTalkSection = dynamic(() => import("@/components/LetsTalkSection"));
const LogoMarquee = dynamic(() => import("@/components/LogoMarquee"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"));
const SEOAccordion = dynamic(() => import("@/components/SEOAccordion"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const StatsFeatureSection = dynamic(() => import("@/components/StatsFeatureSection"));


const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const avatars = [
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=15",
];

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = Math.max(0, Math.min(100, (clickX / width) * 100));
      const newTime = (percentage / 100) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay failed: ", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);



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
                className="group relative inline-flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0 rotate-[340deg] bg-[#2E2C76] translate-y-3 p-2 translate-x-2.5 shadow-xl"
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
                label="Book a free consultation"
                href="tel:+919537587467"
                className="lg:text-[22px]! lg:py-4.5!"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden flex items-center justify-center pt-24 pb- md:pt-32 md:pb-0 lg:py-0"
      >
        
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(46,44,118,0.3)_30%,rgba(46,44,118,0.7)_50%,#2E2C76_100%)]" />
        {/* <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none z-0">
          <ScrollVelocity
            texts={["the best digital platform solution"]}
            velocity={100}
            className="custom-scroll-text text-[90px] md:text-[160px] py-8 tracking-wide  text-white/20 heading select-none uppercase"
            numCopies={9}
            damping={80}
            stiffness={400}
          />
        </div> */}

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
          className="relative z-10 w-[90%] sm:w-[80%] lg:w-[65%] mx-auto"
        >
          <Image
            src="/imgs/home_second.png"
            alt="Team"
            width={1200}
            height={430}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </section>
      <section className="custom-container">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.45,
            }}
            className="flex relative justify-center lg:justify-start w-full lg:w-auto pt-24 lg:pt-0 ml-0 lg:ml-8 xl:ml-12"
          >
            <div
              className="relative lg:absolute top-0 lg:-top-[280px] mx-auto lg:mx-0 lg:left-0 z-20 w-[90vw] max-w-[340px] sm:max-w-[420px] lg:min-w-[520px] flex flex-col gap-4"
            >
              {/* Title above video */}
              <div className="text-center lg:text-left z-30 pointer-events-none px-2">
                <div className="font-light text-black/85 lg:text-white text-[13px] sm:text-[14px] md:text-[16px] xl:text-[18px] uppercase leading-tight tracking-wider subHeading">
                  <span className="text-[#2E2C76] lg:text-[#FFFFFD] font-semibold">#1</span> Human psychology
                  <br />
                  Based Digital Solution
                </div>
              </div>

              {/* Video container */}
              <div
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/20 shadow-2xl bg-black cursor-pointer group/video"
              >
                <video
                  ref={videoRef}
                  src="/imgs/main-vid.mp4"
                  loop
                  playsInline
                  preload="metadata"
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-cover"
                />

                {/* Custom Controls Bar */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 md:p-5 z-30 flex flex-col gap-2.5 opacity-100 lg:opacity-0 lg:group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-auto"
                >
                  {/* Progress Bar */}
                  <div
                    onClick={handleProgressBarClick}
                    className="w-full h-1.5 bg-white/25 rounded-full cursor-pointer relative group/progress overflow-hidden"
                  >
                    <div
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      className="h-full bg-white rounded-full group-hover/progress:bg-indigo-400 transition-all duration-75"
                    />
                  </div>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Play/Pause */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsVideoPlaying(!isVideoPlaying);
                        }}
                        className="text-white hover:text-indigo-400 transition-all duration-200"
                        title={isVideoPlaying ? "Pause" : "Play"}
                      >
                        {isVideoPlaying ? (
                          <Pause className="w-5 h-5 fill-white" />
                        ) : (
                          <Play className="w-5 h-5 fill-white" />
                        )}
                      </button>

                      {/* Mute/Unmute */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="text-white hover:text-indigo-400 transition-all duration-200"
                        title={isMuted ? "Unmute Sound" : "Mute Sound"}
                      >
                        {isMuted ? (
                          <VolumeOff className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Time Indicator */}
                    <span className="text-white/90 text-xs md:text-sm font-medium select-none">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        <div className="max-w-[1440px] mx-auto">

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
          <div
            id="case-studies"
            className="mt-[60px] lg:mt-[90px] space-y-12 lg:space-y-20"
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
  );
};

export default Home;
