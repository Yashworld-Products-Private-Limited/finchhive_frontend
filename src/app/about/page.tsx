import AboutSection from "@/components/AboutSection";
import ExpandingGallery from "@/components/ExpandingGallery";
import LetsTalkSection from "@/components/LetsTalkSection";
import LogoMarquee from "@/components/LogoMarquee";
import ProcessSection from "@/components/ProcessSection";
import SEOAccordion from "@/components/SEOAccordion";
import ValuesSection from "@/components/SnowflakeIcon";
import { TeamSection } from "@/components/TeamSection";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div className="custom-container">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mt-[calc(10dvh-10px)]">
          <Image
            src="/imgs/aboutus.jpg"
            alt="team working"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Optional overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

          <div className="relative z-10 flex items-end h-full">
            <h1 className="text-white heading leading-[36px] md:leading-[56px] lg:leading-[66px] text-2xl sm:text-3xl md:text-5xl lg:text-6xl max-w-3xl text-center mx-auto">
              Hey There! Welcome to{" "}
              <span className="text-[#2E2C76]">Celestial Solutions!</span>
            </h1>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[0%] font-semibold px-4 py-1 rounded-full">
                Who we are
              </h6>
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
                About our Company
              </h2>
            </div>
            <AboutSection />
          </div>
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[1%] font-semibold px-4 py-1 rounded-full">
                Brands
              </h6>
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
                Brands we have <br /> worked with
              </h2>
            </div>
            <div className="mt-10">
              <LogoMarquee />
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[0%] font-semibold px-4 py-1 rounded-full">
                About Founder
              </h6>
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
                Meet The Founder
              </h2>
            </div>
            <p className="text-lg md:text-2xl xl:text-3xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600 mt-6 lg:mt-10">
              James Andrews, the heart of Celestial Solutions. With a decade of
              digital marketing expertise, James&apos;s passion for innovation
              and dedication to clients have guided our journey. His strategic
              vision, client-centered approach, and knack for creative solutions
              shape our commitment to excellence.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-16">
              <div className="relative flex justify-center lg:justify-center w-full">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]  lg:w-[460px] lg:h-[460px] xl:w-[490px] xl:h-[490px] bg-[#908eed] rounded-t-[100%] z-0" />

                <div className="relative z-10 flex justify-center">
                  <Image
                    src="/imgs/jems.png"
                    alt="leader"
                    width={400}
                    height={500}
                    className="w-[300px] sm:w-[330px] md:w-[380px] lg:w-[400px] xl:w-[440px] h-auto object-contain grayscale"
                    priority
                  />
                </div>

                <div className="absolute bottom-0 left-1/3 sm:left-1/3 md:left-1/3 z-20">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg -z-10 px-4 py-2" />

                  <h2 className="text-3xl sm:text-4xl md:text-5xl heading leading-none">
                    <span className="text-[#2E2C76] block">JAMES</span>
                    <span className="text-white block">ANDREWES</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-sm md:text-base lg:text-xl  leading-relaxed">
                  J. Andrews, the driving force behind Celestial Solutions. With
                  over a decade of experience in digital marketing, James&apos;s
                  passion for innovation and dedication to client success have
                  been the cornerstone of our agency&apos;s growth. His
                  strategic vision and hands-on approach have propelled us to
                  the forefront of the industry, while his commitment to
                  transparency and integrity sets the tone for our team. As a
                  respected leader and mentor, James inspires us to exceed
                  expectations and deliver exceptional results for our clients
                  every day.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Visionary Thinker",
                    "Empathetic Leader",
                    "Creative Problem-Solver",
                    "Passionate Mentor",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-black/10 text-black text-sm border border-black/20 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h4 className="text-gray-400 mb-4 subHeading">
                    Featured In:
                  </h4>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {["Logo", "Logo", "Logo", "Logo", "Logo", "Logo"].map(
                      (_, i) => (
                        <div
                          key={i}
                          className="h-[60px] flex items-center justify-center rounded-xl bg-black/20 border border-black/10 backdrop-blur-md"
                        >
                          <span className="text-gray-400 text-sm">LOGO</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[180px] ">
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
          </div>
        </div>
      </div>
      <div className="mt-[100px] lg:mt-[180px] ">
        <ValuesSection />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-[100px] lg:mt-[180px] ">
          <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8 w-full lg:w-[80%] mx-auto text-center">
            <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[1%] font-semibold px-4 py-1 rounded-full">
              Team Members
            </h6>
            <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
              Say Hello to <br /> Our Squad
            </h2>
            <p className="text-lg md:text-2xl xl:text-3xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600 mt-6 lg:mt-10">
              Get ready to meet the faces behind the magic, the dreamers, the
              doers, and the unstoppable force driving our success.
            </p>
          </div>
          <div className="mt-16">
            <TeamSection />
          </div>
        </div>
        <div className="mt-[100px] lg:mt-[180px] ">
          <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
            <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[0%] font-semibold px-4 py-1 rounded-full">
              Gallery
            </h6>
            <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
              Our Agency Snaps
            </h2>
          </div>
          <div className="flex items-center justify-center lg:items-end lg:justify-end  mt-6 lg:mt-10">
            <p className="text-sm lg:text-xl subHeading leading-[24px] text-gray-400 text-center lg:text-left max-w-2xl lg:ml-auto">
              From team outings and office shenanigans to special events and
              celebrations, these photos capture the essence of our vibrant
              culture and the bonds that unite us.
            </p>
          </div>
          <div className="mt-16">
            <ExpandingGallery />
          </div>
        </div>
        <div className="mt-[100px] lg:mt-[160px] ">
          <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
            <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[1%] font-semibold px-4 py-1 rounded-full">
              Frequently Asked Questions
            </h6>
            <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
              Got Questions? <br /> We&apos;ve Got Answers!
            </h2>
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

export default AboutPage;
