"use client";
import AboutSection from "@/components/AboutSection";
import ExpandingGallery from "@/components/ExpandingGallery";
import LetsTalkSection from "@/components/LetsTalkSection";
import LogoMarquee from "@/components/LogoMarquee";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import SEOAccordion from "@/components/SEOAccordion";
import ValuesSection from "@/components/SnowflakeIcon";
import { TeamSection } from "@/components/TeamSection";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const fadeRight: Variants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const scaleFade: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div>
      <div className="custom-container">
        <div className=" relative w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-2xl mt-[calc(10dvh-10px)] bg-[url('/imgs/abt.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />

          <div className="relative z-10 flex items-end justify-center h-full p-6 md:p-10">
            <SectionTitle
              className=""
              title={
                <>
                  <span className="text-[#FFFFFF]">Hey There! Welcome to </span>{" "}
                  <br />
                  <span className="text-[#2E2C76]">Celestial Solutions!</span>
                </>
              }
            />
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <SectionBadge label="Who we are" />
              <SectionTitle
                className="max-w-3xl mx-auto"
                title={<>About our Company</>}
              />
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]"></h2>
            </div>
            <AboutSection />
          </div>
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Brands" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title={
                  <>
                    Brands we have <br /> worked with
                  </>
                }
              />
            </div>
            <div className="mt-10">
              <LogoMarquee />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mt-[100px] lg:mt-[180px] "
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12"
            >
              <SectionBadge label="About Founder" />
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]"></h2>
              <SectionTitle
                className="max-w-3xl "
                title={<> Meet The Founder</>}
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600 mt-6 lg:mt-10"
            >
              With over 15 years of experience in the teaching industry, Niraj
              Prasad brings a unique human-centered perspective to the digital
              world. <br />
              Before building Finchhive, Niraj spent years understanding how
              people think, learn, engage, and make decisions especially
              teenagers and young digital audiences. His background as an
              educator helped him develop deep insights into audience
              psychology, communication patterns, attention behavior, and
              emotional connection.
            </motion.p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-16">
              <motion.div
                variants={fadeLeft}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="lg:sticky lg:top-20 h-fit relative flex justify-center lg:justify-center w-full overflow-hidden"
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex justify-center"
                >
                  <div
                    className={`absolute top-25 rotate-180 w-[120%] h-[120%] rounded-full transition-all duration-500
                bg-[radial-gradient(circle_at_center,_#2E2C76_0%,_#3f3ca0_40%,_transparent_70%)]
                [clipPath:polygon(0_50%,100%_50%,100%_100%,0_100%)]
                ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
                  />
                  <Image
                    src="/imgs/jems.png"
                    alt="leader"
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-[300px] sm:w-[330px] md:w-[380px] lg:w-[400px] xl:w-[440px] h-auto object-contain 6grayscale z-20"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute bottom-0 left-1/3 sm:left-1/3 md:left-1/3 xl:left-1/4 z-20"
                >
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg -z-10 px-4 py-2" />

                  <h2 className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl heading leading-none">
                    <span className="text-[#2E2C76] block">Niraj</span>
                    <span className="text-white block">Prasad</span>
                  </h2>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeRight} className="space-y-6">
                <p className="text-gray-600 text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] subHeading">
                  That experience became the foundation of Finchhive. While many
                  agencies focus only on trends and algorithms, Niraj built
                  Finchhive around one core belief: People connect with brands
                  that understand them. His journey from education to digital
                  strategy created a rare combination of:
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Human understanding",
                    "Creative thinking",
                    "Audience psychology",
                    "Storytelling strategy",
                    "Digital growth vision",
                  ].map((tag) => (
                    <motion.span
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      key={tag}
                      className="px-4 py-2 rounded-full bg-black/10 text-black text-sm border border-black/20 backdrop-blur-md subHeading"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] subHeading">
                  Through years of interacting with students and modern
                  consumers, Niraj recognized a major gap in the digital space
                  brands were creating content, but very few truly understood
                  what audiences actually wanted to see, feel, and connect with.
                  That realization led to the creation of Finchhive a digital
                  platform solutions company focused on building meaningful
                  digital experiences, scalable brand systems, and
                  performance-driven growth. Today, Niraj leads Finchhive with a
                  vision to help businesses grow through strategy, creativity,
                  technology, and authentic audience connection.
                </p>
                <p className="text-gray-600 text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] subHeading">
                  “Digital growth starts with understanding people first.”{" "}
                  <br />
                  <span className="text-base font-semibold text-[#2E2C76]">
                    - Niraj Prasad
                  </span>
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/niraj.b.prasad/"
                    target="_blank"
                    className="group"
                  >
                    <FaInstagram
                      size={24}
                      className="text-black transition-all duration-300 group-hover:text-[#E4405F] group-hover:scale-110"
                    />
                  </Link>

                  <Link
                    href="https://in.linkedin.com/in/niraj-prasad-b37ba0b9"
                    target="_blank"
                    className="group"
                  >
                    <FaLinkedinIn
                      size={24}
                      className="text-black transition-all duration-300 group-hover:text-[#0A66C2] group-hover:scale-110"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
          {/* <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[1%] font-semibold px-4 py-1 rounded-full">
                How We Work
              </h6>
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
                Our 4 Stage Process
              </h2>
            </div>
            <div className="mt-16">
              <ProcessSection />
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-[100px] lg:mt-[180px] ">
        <ValuesSection />
      </div>
      <div className="custom-container">
        <div className="max-w-[1440px] mx-auto">
          <div
            id="our-team"
            className="mt-[60px] lg:mt-[120px] overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col items-center justify-center gap-2 xl:gap-2 w-full lg:w-[80%] mx-auto text-center"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <SectionBadge label="Team Members" />
              </motion.div>

              {/* Title */}
              <motion.div variants={scaleFade}>
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title={
                    <>
                      Say Hello to <br /> Our Squad
                    </>
                  }
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600"
              >
                Get ready to meet the faces behind the magic, the dreamers, the
                doers, and the unstoppable force driving our success.
              </motion.p>
            </motion.div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="my-16"
            >
              <TeamSection />
            </motion.div>
          </div>
          <div className="mt-[100px] lg:mt-[180px] ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <SectionBadge label="Gallery" />
              </motion.div>
              <motion.div variants={scaleFade}>
                <SectionTitle
                  className="max-w-3xl "
                  title={<> Our Agency Snaps</>}
                />
              </motion.div>
            </motion.div>
            <div className="flex items-center justify-center lg:items-end lg:justify-end  mt-6 lg:mt-10">
              <motion.p
                variants={fadeUp}
                className="text-sm md:text-xl xl:text-2xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600 text-center lg:text-left max-w-2xl lg:ml-auto"
              >
                From team outings and office shenanigans to special events and
                celebrations, these photos capture the essence of our vibrant
                culture and the bonds that unite us.
              </motion.p>
            </div>
            <div className="mt-16">
              <ExpandingGallery />
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[160px] ">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Frequently Asked Questions" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title={
                  <>
                    Got Questions? <br /> We&apos;ve Got Answers!
                  </>
                }
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

export default AboutPage;
