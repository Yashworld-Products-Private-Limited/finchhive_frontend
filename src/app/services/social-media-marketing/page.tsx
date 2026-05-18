import BentoGrid from "@/components/BentoGrid";
import PrimaryButton from "@/components/Button";
import ResultsStatsSection from "@/components/ResultsStatsSection";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import { Marquee } from "@/components/ui/marquee";
import { logos, platforms, reels, SocialImages } from "@/constants";
import { BadgeCheck, Star, Zap } from "lucide-react";
import Image from "next/image";

const users = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
];

const page = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-[calc(15dvh-80px+110px)]">
          <div className="text-center space-y-4">
            <SectionTitle
              title={
                <>
                  We Help Brands
                  <br />
                  Dominate On Social
                </>
              }
            />
            <p className=" text-gray-400 subheading text-base md:text-lg max-w-2xl mx-auto leading-relaxed subHeading">
              We help you reach the right audience with content, management, and
              paid media on the social platforms that matter most.
            </p>

            <Marquee className="relative flex items-center justify-center gap-6">
              {reels.map((item, i) => (
                <div
                  key={i}
                  className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/poster.webp"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <img
                      src={item.profile}
                      alt={item.name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full border border-white object-cover"
                    />

                    <div className="flex items-center gap-1">
                      <span className="text-lg font-medium text-white">
                        {item.name}
                      </span>

                      <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            <div className=" flex justify-center gap-6">
              <PrimaryButton label="Let's Connect" />
            </div>
            <div className="inline-flex items-center gap-4  mt-2">
              <div className="flex items-center">
                {users.map((img, i) => (
                  <div
                    key={i}
                    className={`relative ${
                      i !== 0 ? "-ml-5" : ""
                    } w-14 h-14 rounded-full border-[2px] border-white overflow-hidden shadow-md`}
                  >
                    <Image
                      src={img}
                      alt="creator"
                      loading="lazy"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}

                <div className="-ml-3 w-14 h-14 rounded-full bg-[#2E2C76] flex items-center -ml-6 justify-center border-[2px] border-white z-10">
                  <Zap className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-black">
                    4.9/5
                  </span>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#2E2C76] text-[#2E2C76]"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-[#333] font-medium">
                  Grown over 400 creators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-[40px] lg:mt-[60px]">
        <p className="text-center text-sm lg:text-lg text-black subHeading mb-10">
          We Are Trusted By:
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <Marquee
            reverse
            className="relative flex items-center gap-8 overflow-hidden py-6"
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="relative mx-4 xl:mx-6 flex items-center justify-center transition-all duration-300 hover:scale-105 "
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  loading="lazy"
                  className="h-18 w-auto object-contain "
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div id="social-media-marketing" className="custom-container">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              {/* <SectionBadge label="Results" /> */}

              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Social Media Marketing"
              />
              <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                Strategic social media management and growth systems for
                Instagram, Facebook, LinkedIn, and YouTube.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[60px] lg:mt-[100px]">
          <Marquee className="relative flex items-center justify-center gap-6">
            {reels.map((item, i) => (
              <div
                key={i}
                className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/poster.webp"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <img
                    src={item.profile}
                    alt={item.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full border border-white object-cover"
                  />

                  <div className="flex items-center gap-1">
                    <span className="text-lg font-medium text-white">
                      {item.name}
                    </span>

                    <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="max-w-[1440px] mx-auto sapce-y-10 ">
          <BentoGrid items={SocialImages} />
          <div className="relative overflow-hidden mt-10">
            <div className="relative mx-auto ">
              {platforms.map((item, index) => (
                <div
                  key={index}
                  className={`absolute z-10 flex items-center justify-center w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] md:w-[105px] md:h-[105px] rounded-[22px] ${item.bg} ${item.className} backdrop-blur-md transition-all duration-500 hover:scale-110`}
                >
                  <Image
                    src={item.image}
                    alt="platform"
                    width={50}
                    height={50}
                    loading="lazy"
                    className=" w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] md:w-[52px] md:h-[52px] object-contain"
                  />
                </div>
              ))}

              <div className="relative z-20 flex min-h-[420px] sm:min-h-[520px] items-center justify-center text-center">
                <h2 className=" max-w-[950px] leading-[1.2] tracking-[1px] text-[#2c2929] heading text-[24px] sm:text-[36px] md:text-[42px] lg:text-[58px]">
                  We Work Across All <br />
                  <span className="text-[#2E2C76]">Major</span> Social
                  Platforms.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px]">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <SectionBadge label="Results" />

              <SectionTitle
                className="max-w-3xl mx-auto"
                title="Results That Speak For Themselves"
              />
              <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center  max-w-xl">
                Audience-focused social campaigns backed by real growth,
                engagement, and revenue.
              </p>
            </div>
            <ResultsStatsSection />
          </div>
        </div>
        <div id="reel-creation" className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              {/* <SectionBadge label="Results" /> */}

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
            <Marquee className="relative flex items-center justify-center gap-6">
              {reels.map((item, i) => (
                <div
                  key={i}
                  className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
                >
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/poster.webp"
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <img
                      src={item.profile}
                      alt={item.name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full border border-white object-cover"
                    />

                    <div className="flex items-center gap-1">
                      <span className="text-lg font-medium text-white">
                        {item.name}
                      </span>

                      <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="max-w-[1440px] mx-auto sapce-y-10 ">
            <BentoGrid items={SocialImages} />
          </div>
        </div>
        <div id="brand-storytelling" className="">
          <div className="max-w-[1440px] mx-auto">
            <div className="mt-[100px] lg:mt-[180px] sapce-y-10">
              <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
                {/* <SectionBadge label="Results" /> */}

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
              <Marquee className="relative flex items-center justify-center gap-6">
                {reels.map((item, i) => (
                  <div
                    key={i}
                    className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster="/poster.webp"
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <img
                        src={item.profile}
                        alt={item.name}
                        loading="lazy"
                        className="h-10 w-10 rounded-full border border-white object-cover"
                      />

                      <div className="flex items-center gap-1">
                        <span className="text-lg font-medium text-white">
                          {item.name}
                        </span>

                        <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="max-w-[1440px] mx-auto sapce-y-10 ">
              <BentoGrid items={SocialImages} />
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
          <div className="">
            <div className="mt-[60px] lg:mt-[100px]">
              <Marquee className="relative flex items-center justify-center gap-6">
                {reels.map((item, i) => (
                  <div
                    key={i}
                    className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster="/poster.webp"
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <img
                        src={item.profile}
                        alt={item.name}
                        loading="lazy"
                        className="h-10 w-10 rounded-full border border-white object-cover"
                      />

                      <div className="flex items-center gap-1">
                        <span className="text-lg font-medium text-white">
                          {item.name}
                        </span>

                        <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className="max-w-[1440px] mx-auto sapce-y-10 ">
              <BentoGrid items={SocialImages} />
            </div>
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
              <Marquee className="relative flex items-center justify-center gap-6">
                {reels.map((item, i) => (
                  <div
                    key={i}
                    className="group relative mx-3 h-[450px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white shadow-xl"
                  >
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster="/poster.webp"
                      disablePictureInPicture
                      controlsList="nodownload noplaybackrate"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <img
                        src={item.profile}
                        alt={item.name}
                        loading="lazy"
                        className="h-10 w-10 rounded-full border border-white object-cover"
                      />

                      <div className="flex items-center gap-1">
                        <span className="text-lg font-medium text-white">
                          {item.name}
                        </span>

                        <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
