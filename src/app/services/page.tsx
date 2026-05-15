"use client";
import { FeatureCard, FeatureItem } from "@/components/FeatureCard";
import LetsTalkSection from "@/components/LetsTalkSection";
import { FeaturesServices, servicesPage } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-[calc(15dvh-80px+120px)]">
          <div className="">
            <h2 className="text-[32px] lg:text-[52px] heading text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
              Digital Platforms. Creative Power.
              <br /> Scalable Growth.
            </h2>
          </div>
          <div className="mt-[100px] lg:mt-[180px]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-6 mt-8">
              {servicesPage.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    onClick={() => router.push(item.link)}
                    className="flex flex-col items-start justify-between group relative rounded-3xl p-3 lg:p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 hover:border-blue-200 transition-all duration-300 space-y-2 lg:space-y-5 "
                  >
                    {/* ICON */}
                    <div className="flex flex-col items-start gap-3">
                      <div className=" flex items-center justify-center rounded-xl bg-[#2E2C76] p-4">
                        <Icon className="text-[#FFFFFF]" size={24} />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-gray-900 text-[22px] md:text-[24px] 2xl:text-[26px] heading ">
                        {item.title}
                      </h3>
                    </div>

                    {/* DESC */}
                    <p className="text-gray-600 text-sm lg:text-base subHeading leading-normal">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    <Link href={item.link} className="flex items-center gap-3 text-gray-900 text-xs tracking-[0%] uppercase">
                      <span className="subHeading">Learn More</span>
                      <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-blue-400 transition group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[180px]">
            <div className="flex flex-col  items-center justify-center gap-4 md:gap-6 xl:gap-8">
              <h6 className="inline-flex items-center justify-center text-center bg-[#2E2C76] text-white subHeading text-xs lg:text-sm tracking-[1%] font-semibold px-4 py-1 rounded-full">
                Why Choose Us
              </h6>
              <h2 className="text-[32px] lg:text-[52px] heading  text-center tracking-[1%] leading-[50px] uppercase text-[#2E2C76]">
                WHY FINCHHIVE IS YOUR <br />
                DIGITAL GROWTH PARTNER
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-between gap-4 mt-20">
              {FeaturesServices.map((item: FeatureItem, i: number) => (
                <FeatureCard
                  key={i}
                  title={item?.title}
                  description={item.description}
                  icon={item?.icon}
                  delay={i * 100}
                  isMiddle={false}
                />
              ))}
            </div>
          </div>
          <div className="mt-[100px] lg:mt-[180px] mb-[60px]">
            <LetsTalkSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
