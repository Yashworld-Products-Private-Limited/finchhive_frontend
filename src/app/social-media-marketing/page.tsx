"use client";
import BentoGrid from "@/components/BentoGrid";
import CaseStudies from "@/components/CaseStudies";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectCard from "@/components/ProjectCard";
import { ReelCard } from "@/components/ReelsMarquee";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import SocialIcons from "@/components/SocialIcons";
import { Marquee } from "@/components/ui/marquee";
import {
  brandStory,
  Projects,
  reelcreation,
  SocialImages,
  socialMedia,
} from "@/constants";
import { useEffect } from "react";
import { motion} from "framer-motion";


const Page = () => {
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

  return (
    <div>
      <div id="social-media-marketing" className="max-w-[1440px] mx-auto">
        <div className="mt-[calc(15dvh-80px+110px)]">
          <div className="text-center space-y-4">
            <SectionTitle
              title={
                <>
                  We Help Brands
                  <br />
                  Dominate On Digital Plateforms.
                </>
              }
            />
            <p className=" text-gray-400 subheading text-base md:text-lg max-w-2xl mx-auto leading-relaxed subHeading">
              We help you reach the right audience with content, management, and
              paid media on the social platforms that matter most.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-[40px] lg:mt-[60px]">
        <LogoMarquee />
      </div>
      <div className="custom-container">
        <div className="mt-[60px] lg:mt-[100px]">
          <Marquee
            pauseOnHover
            className="relative flex items-center justify-center gap-6"
          >
            {socialMedia.map((item) => (
              <ReelCard key={item.video} item={item} />
            ))}
          </Marquee>
        </div>
        <div className="max-w-[1440px] mx-auto sapce-y-10 ">
          <BentoGrid items={SocialImages} />
          <div className="mt-10 lg:mt-20">
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="max-w-[1440px] mx-auto">{/*  */}</div>
        <div id="reel-creation" className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Reel Creation & Short-Form Content"
              />
              <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                High-impact cinematic reels, YouTube Shorts, and viral-ready
                content optimized for engagement and reach.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mt-[60px] lg:mt-[100px]">
            <Marquee
              pauseOnHover
              className="relative flex items-center justify-center gap-6"
            >
              {reelcreation.map((item) => (
                <ReelCard key={item.video} item={item} />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[80px] lg:mt-[140px] space-y-12 lg:space-y-20">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6">
              <SectionBadge label="Works" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Case Studies"
              />
            </div>
            <CaseStudies />
          </div>
        </div>
        <div id="brand-storytelling" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Brand Storytelling"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Emotion-driven visual storytelling that helps brands connect
                  deeply with their audience and build long-term trust.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-[60px] lg:mt-[100px]">
              <Marquee
                pauseOnHover
                className="relative flex items-center justify-center gap-6"
              >
                {brandStory.map((item) => (
                  <ReelCard key={item.video} item={item} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        <div id="influencer-collaborations" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Influencer & Creator Collaborations"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Strategic influencer partnerships and creator campaigns
                  designed to amplify brand reach, build social proof, and drive
                  authentic audience engagement across digital platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[60px] lg:mt-[100px]">
            <Marquee
              pauseOnHover
              className="relative flex items-center justify-center gap-6"
            >
              {brandStory.map((item) => (
                <ReelCard key={item.video} item={item} />
              ))}
            </Marquee>
          </div>
          <div className="">
            {/* <div className="mt-[60px] lg:mt-[100px]">
              <ReelsMarquee />
            </div> */}
          </div>
        </div>
        <div id="creative-design" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Creative Design & Visual Identity"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Premium graphic design, visual systems, ad creatives, brand
                  aesthetics, and digital-first creative direction.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-[1440px] mx-auto sapce-y-10 ">
              <BentoGrid items={SocialImages} />
            </div>
          </div>
        </div>
        <div id="websites-digital-platform-solutions" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Website & Digital Platform Solutions"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Modern websites, landing pages, e-commerce platforms, and
                  conversion-focused digital systems tailored for scalable
                  growth.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-[1440px] mx-auto sapce-y-10 mt-8">
              <h1 className="max-w-3xl mx-auto subHeading text-center tracking-[1%] text-[20px] md:text-[24px] lg:text-[28px] leading-[20px] lg:leading-[28px] will-change-transform">
                It Partner Yashworld Product Privet Limited
              </h1>
              <div className="grid md:grid-cols-2  sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {Projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="logo-design" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Logo Designing & Brand Marks"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Crafting timeless, memorable logo identities and brand marks
                  that define your visual identity across all platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-[1440px] mx-auto sapce-y-10 ">
              <BentoGrid items={SocialImages} />
            </div>
          </div>
        </div>
        <div id="interior-architectural-shoots" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                <SectionTitle
                  className="max-w-3xl mx-auto"
                  title="Interior & Architectural Shoots"
                />
                <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                  Luxury visual content for interior designers, architects,
                  cafés, hospitality brands, and real estate projects.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-[1440px] mx-auto sapce-y-10 ">
              <BentoGrid items={SocialImages} />
            </div>
            <div className="mt-[60px] lg:mt-[100px]">
              {/* <Marquee
                pauseOnHover
                className="relative flex items-center justify-center gap-6"
              >
                {Interior.map((item) => (
                  <ReelCard key={item.video} item={item} />
                ))}
              </Marquee> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
