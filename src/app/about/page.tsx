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

const AboutPage = () => {
  return (
    <div>
      <div className="custom-container">
        <div
          className=" relative w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-2xl mt-[calc(10dvh-10px)] bg-[url('/imgs/abt.jpg')] bg-cover bg-center bg-fixed
  "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />

          <div className="relative z-10 flex items-end justify-center h-full p-6 md:p-10">
            <h1 className=" text-center text-white heading max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Hey There! Welcome{" "}
              <span className="text-[#2E2C76]">Celestial Solutions!</span>
            </h1>
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
          <div className="mt-[100px] lg:mt-[180px] ">
            <div className="flex flex-col lg:flex-row  items-center gap-6 md:gap-8 xl:gap-12">
              <SectionBadge label="About Founder" />
              <h2 className="text-[32px] lg:text-[52px] heading font-bold text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]"></h2>
              <SectionTitle
                className="max-w-3xl "
                title={<> Meet The Founder</>}
              />
            </div>
            <p className="text-lg md:text-2xl xl:text-3xl subHeading leading-[20px] md:leading-[26px] xl:leading-[32px] text-gray-600 mt-6 lg:mt-10">
              With over 15 years of experience in the teaching industry, Niraj
              Prasad brings a unique human-centered perspective to the digital
              world. <br />
              Before building FINCHHIVE, Niraj spent years understanding how
              people think, learn, engage, and make decisions especially
              teenagers and young digital audiences. His background as an
              educator helped him develop deep insights into audience
              psychology, communication patterns, attention behavior, and
              emotional connection.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-16">
              <div className="lg:sticky lg:top-20 h-fit relative flex justify-center lg:justify-center w-full">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]  lg:w-[460px] lg:h-[460px] xl:w-[490px] xl:h-[490px] bg-[#908eed] rounded-t-[100%] z-0" />

                <div className="relative z-10 flex justify-center">
                  <Image
                    src="/imgs/jems.png"
                    alt="leader"
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-[300px] sm:w-[330px] md:w-[380px] lg:w-[400px] xl:w-[440px] h-auto object-contain grayscale"
                  />
                </div>

                <div className="absolute bottom-0 left-1/3 sm:left-1/3 md:left-1/3 xl:left-1/4 z-20">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg -z-10 px-4 py-2" />

                  <h2 className="flex items-center gap-2 text-3xl sm:text-4xl md:text-5xl heading leading-none">
                    <span className="text-[#2E2C76] block">Niraj</span>
                    <span className="text-white block">Prasad</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-sm md:text-base lg:text-xl  leading-relaxed subHeading">
                  That experience became the foundation of FINCHHIVE. While many
                  agencies focus only on trends and algorithms, Niraj built
                  FINCHHIVE around one core belief: People connect with brands
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
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-black/10 text-black text-sm border border-black/20 backdrop-blur-md subHeading"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm md:text-base lg:text-xl  leading-relaxed subHeading">
                  Through years of interacting with students and modern
                  consumers, Niraj recognized a major gap in the digital space
                  brands were creating content, but very few truly understood
                  what audiences actually wanted to see, feel, and connect with.
                  That realization led to the creation of FINCHHIVE a digital
                  platform solutions company focused on building meaningful
                  digital experiences, scalable brand systems, and
                  performance-driven growth. Today, Niraj leads FINCHHIVE with a
                  vision to help businesses grow through strategy, creativity,
                  technology, and authentic audience connection.
                </p>
                <p className="text-gray-600 text-sm md:text-base lg:text-xl  leading-relaxed subHeading">
                  “Digital growth starts with understanding people first.”{" "}
                  <br />
                  <span className="text-base font-semibold text-[#2E2C76]">
                    - Niraj Prasad
                  </span>
                </p>

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
      <div className="max-w-[1440px] mx-auto">
        <div id="our-team" className="mt-[100px] lg:mt-[180px] ">
          <div className="flex flex-col  items-center justify-center gap-2 md:gap-3 xl:gap-4 w-full lg:w-[80%] mx-auto text-center">
            <SectionBadge label="Team Members" />

            <SectionTitle
              className="max-w-3xl mx-auto"
              title={
                <>
                  {" "}
                  Say Hello to <br /> Our Squad
                </>
              }
            />
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
            <SectionBadge label="Gallery" />
            <SectionTitle
              className="max-w-3xl "
              title={<> Our Agency Snaps</>}
            />
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
            <SectionBadge label="Frequently Asked Questions" />
            
            <SectionTitle
              className="max-w-3xl mx-auto"
              title={<>Got Questions? <br /> We&apos;ve Got Answers!</>}
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

export default AboutPage;
