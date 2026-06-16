import { FeatureCard, FeatureItem } from "@/components/FeatureCard";
import { ReelCard } from "@/components/ReelsMarquee";
import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";
import { FeaturesServices, Interior, kalrasKitchen } from "@/constants";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

const reelData = [
  {
    date: "Mar 24",
    label: "Viral",
    views: "9,00,319",
    reach: "8,38,143",
    likes: "4,100+",
    comments: "10",
    shares: "484",
    saves: "470",
    follows: "165",
    watch: "15s",
    width: "100%",
  },
  {
    date: "Apr 7",
    views: "14,026",
    reach: "9,882",
    likes: "234",
    comments: "30",
    shares: "605",
    saves: "600",
    follows: "20",
    watch: "10s",
    width: "1.56%",
  },
  {
    date: "May 1",
    label: "Strong",
    views: "23,655",
    reach: "19,344",
    likes: "325",
    comments: "8",
    shares: "622",
    saves: "618",
    follows: "87",
    watch: "11s",
    width: "2.63%",
  },
  {
    date: "May 7",
    views: "14,593",
    reach: "12,233",
    likes: "183",
    comments: "7",
    shares: "353",
    saves: "332",
    follows: "36",
    watch: "8s",
    width: "1.62%",
  },
  {
    date: "May 8",
    label: "Strong",
    views: "23,510",
    reach: "19,448",
    likes: "317",
    comments: "6",
    shares: "730",
    saves: "703",
    follows: "76",
    watch: "10s",
    width: "2.61%",
  },
];

const insights = [
  {
    no: "01",
    title: "Audience study beats trend chasing every time",
    desc: "The viral reel wasn't built on a trending sound or format. It was built on a deep understanding of what Kalra Kitchen's audience actually craves.",
    tag: "↑ 9 Lakh Views from Strategy",
  },
  {
    no: "02",
    title: "Save rate is the strongest signal of content quality",
    desc: "Kalra Kitchen's reels accumulated 2,723 total saves a massive signal that people intend to revisit, share, or act on the content.",
    tag: "↑ 2,723 Total Saves",
  },
  {
    no: "03",
    title: "First-second hook is everything on Instagram",
    desc: "The average watch time of 15 seconds on the viral reel proves that the hook worked and users stayed engaged.",
    tag: "↑ 15s Avg Watch Time",
  },
  {
    no: "04",
    title: "Consistent quality creates compounding reach",
    desc: "Every reel maintained strong performance after the viral moment, creating a new benchmark for the brand.",
    tag: "↑ Every Reel Beat Baseline",
  },
];

const approach = [
  {
    no: "01",
    title: "Audience Discovery & Psychology Study",
    desc: "Before a single frame was shot, we spent time understanding who Kalra Kitchen's real audience is not who they assumed it was. We analyzed what food content their potential customers save, share, comment on, and seek out. We studied their hunger triggers, the visual cues that make them stop scrolling, and the emotions that convert a viewer into a visitor.",
    tags: [
      "Audience Behavior Analysis",
      "Platform Psychology",
      "Engagement Study",
    ],
  },
  {
    no: "02",
    title: "Demand Mapping & Content Architecture",
    desc: "We mapped exactly what Kalra Kitchen's audience demands which dishes create the most curiosity, which cooking styles generate saves, and which content formats drive profile visits and footfall. From this research, we built a content architecture that aligned the brand's strengths with audience appetite. No guesswork. No trend-chasing.",
    tags: ["Demand Mapping", "Format Strategy", "Dish Selection"],
  },
  {
    no: "03",
    title: "Hook-Driven Reel Engineering",
    desc: "Every reel was scripted around a scroll-stopping hook engineered for the first 1–2 seconds. We understand that attention is won in the opening frame so we designed each reel to create immediate visual curiosity, desire, and emotional pull. The scripting follows platform psychology, not creative instinct alone.",
    tags: ["Hook Architecture", "Scroll Stop", "Emotion Scripting"],
  },
  {
    no: "04",
    title: "Cinematic Execution & Premium Editing",
    desc: "Production quality matters. We shot Kalra Kitchen's food with cinematic framing, intentional lighting, and visual storytelling that makes the food look irresistible. Color grading, rhythm editing, and sound design were all aligned to create content that doesn't just get views it builds brand desire. Every frame was a brand asset.",
    tags: ["Cinematic Shoot", "Color Grading", "Sound Design"],
  },
  {
    no: "05",
    title: "Performance Tracking & Optimization",
    desc: "After each reel, we tracked performance data deeply not just views, but watch time, skip rates, save patterns, and follower conversion. Every data point informed the next piece of content. This is how FINCHHIVE builds compounding growth each reel smarter than the last.",
    tags: ["Deep Analytics", "Watch Time", "Optimization"],
  },
];

const reels = [
  {
    id: 1,
    image: "/imgs/responseImages2.jpeg",
    views: "2.4M",
    reach: "1.8M",
    link: "https://www.instagram.com/reel/abc123/",
  },
  {
    id: 2,
    image: "/imgs/responseImages6.jpeg",
    views: "980K",
    reach: "740K",
    link: "https://www.instagram.com/reel/xyz456/",
  },
  {
    id: 3,
    image: "/imgs/responseImages3.jpeg",
    views: "3.1M",
    reach: "2.2M",
    link: "https://www.instagram.com/reel/demo789/",
  },
  {
    id: 4,
    image: "/imgs/responseImages4.jpeg",
    views: "2.4M",
    reach: "1.8M",
    link: "https://www.instagram.com/reel/abc123/",
  },
  {
    id: 5,
    image: "/imgs/responseImages5.jpeg",
    views: "980K",
    reach: "740K",
    link: "https://www.instagram.com/reel/xyz456/",
  },
  {
    id: 6,
    image: "/imgs/responseImages1.jpeg",
    views: "3.1M",
    reach: "2.2M",
    link: "https://www.instagram.com/reel/demo789/",
  },
];

export default function CaseStudyPage() {
  return (
    <main className=" overflow-hidden py-24">
      <section className="custom-container ">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 text-sm text-zinc-400 mb-6">
            <SectionBadge label="Case Study" />
            <span>March May 2025 · Food & Hospitality</span>
          </div>

          <h1 className="text-5xl md:text-8xl leading-[0.95] text-[#2E2C76] max-w-5xl heading">
            Kalra Kitchen
            <br />
            <span className="italic text-zinc-300">
              From Casual Shoots
              <br />
              to Viral Dominance.
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 max-w-2xl text-lg leading-8 subHeading">
            How FINCHHIVE&apos;s audience-first content strategy took a home
            kitchen brand from zero digital strategy to nearly 10 lakh views and
            real-world footfall growth.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            {[
              ["9.76L+", "Total Views"],
              ["8.99L+", "Accounts Reached"],
              ["6776", "Total Shares"],
              ["384", "New Followers"],
            ].map((item, i) => (
              <div
                key={i}
                className=" group relative overflow-hidden rounded-[28px] border border-white/20 bg-black/10 backdrop-blur-[0.8px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2E2C76]/80 hover:bg-black/15 hover:shadow-[0_20px_50px_rgba(46,44,118,0.35)] subHeading"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-[#2E2C76]/30 blur-[]" />
                  <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#6D5DF6]/20 blur-2xl" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60" />

                <div className="relative z-10">
                  <h2 className=" text-4xl md:text-5xl font-bold text-[#2E2C76] transition-transform duration-500 group-hover:scale-110">
                    {item[0]}
                  </h2>
                  <p className=" text-zinc-800 mt-3 text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                    {item[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[100px] lg:mt-[180px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col  items-center justify-center space-y-3">
            <SectionBadge label=" The Challenge" />
            <SectionTitle
              className="max-w-3xl  mx-auto"
              title={
                <>
                  Great food.
                  <br />
                  Zero digital strategy.
                </>
              }
            />
            <p className="text-zinc-400  text-base md:text-lg max-w-3xl leading-8 text-center subHeading">
              Kalra Kitchen had the product. The taste. The passion. But their
              digital presence was a missed opportunity casual shoots with no
              direction, chasing trends that didn&apos;t resonate with their
              actual audience, and content that disappeared into the algorithm
              without impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="group relative overflow-hidden rounded-[32px] border border-red-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(239,68,68,0.12)]">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-red-400 to-red-200" />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-50 blur-3xl transition-all duration-500 group-hover:scale-125" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-2xl border border-red-100">
                    <TrendingDown />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                      Before
                    </p>

                    <h3 className="text-3xl font-bold text-zinc-900">
                      FINCHHIVE
                    </h3>
                  </div>
                </div>
                <ul className="space-y-5">
                  {[
                    "Casual content with no defined brief",
                    "Chasing trends that didn't fit the brand",
                    "No audience research or strategy",
                    "Low reach and weak engagement",
                    "No business impact from social media",
                    "Generic content with no brand identity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 border border-red-100 text-red-400 text-sm transition-all duration-300 group-hover/item:scale-110">
                        ✕
                      </div>
                      <span className="text-zinc-600 leading-7 transition-colors duration-300 group-hover/item:text-zinc-900">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[32px] border border-emerald-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,185,129,0.12)]">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-400 to-emerald-200" />
              <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-emerald-50 blur-3xl transition-all duration-500 group-hover:scale-125" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl border border-emerald-100">
                    <TrendingUp />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                      After
                    </p>
                    <h3 className="text-3xl font-bold text-zinc-900">
                      FINCHHIVE
                    </h3>
                  </div>
                </div>
                <ul className="space-y-5">
                  {[
                    "Audience-first strategy built from data",
                    "Scroll-stopping scripted reels",
                    "First reel hit 9 lakh+ views organically",
                    "Consistent 14K–23K+ reel performance",
                    "Real increase in customer footfall",
                    "Strong visual identity & positioning",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 text-sm transition-all duration-300 group-hover/item:scale-110">
                        ✓
                      </div>
                      <span className="text-zinc-600 leading-7 transition-colors duration-300 group-hover/item:text-zinc-900">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[100px] lg:mt-[180px] py-28 border-y border-white/10 bg-[#2E2C76]">
        <div className="max-w-[1440px] mx-auto text-center">
          <SectionTitle
            className="max-w-[1440px] mx-auto text-white"
            title={
              <>
                “We don&apos;t follow trends.
                <br />
                We study your audience and build content that makes them stop,
                watch, and walk in.”
              </>
            }
          />

          <p className="mt-6 text-zinc-300">— FINCHHIVE Content Philosophy</p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-4">
        <section className="mt-[100px] lg:mt-[180px]">
          <div className="flex flex-col  items-start justify-start space-y-3">
            <SectionBadge label="Our Approach" />
            <SectionTitle
              className="max-w-3xl text-start!"
              title={
                <>
                  Strategy first.
                  <br />
                  Virality follows.
                </>
              }
            />
            <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
              FINCHHIVE doesn&apos;t create content we engineer digital
              presence. Every step of our process for Kalra Kitchen was
              intentional, research-driven, and built for long-term growth.
            </p>
          </div>

          <div className="space-y-8 mt-16">
            {approach.map((item) => (
              <div
                key={item.no}
                className="grid md:grid-cols-[120px_1fr] gap-4 lg:gap-8 border border-white/10 bg-white/[0.03] "
              >
                <div className="text-4xl lg:text-6xl heading text-[#726f6f] italic">
                  {item.no}
                </div>

                <div className="space-y-4 lg:max-w-[60%]">
                  <h3 className="text-2xl lg:text-3xl heading">{item.title}</h3>

                  <p className="text-zinc-400  text-base md:text-lg  leading-6  subHeading">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 ">
                    {item.tags.map((tag) => (
                      <SectionBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-[100px] lg:mt-[180px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative mt-8 overflow-hidden rounded-[40px] border border-[#E9E7FF] bg-white shadow-xl">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#5B4DFF]/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-baseline  p-4 lg:p-8 md:p-12 ">
              <div className="flex flex-col items-start justify-between space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#DDD8FF] bg-[#F4F2FF] px-5 py-2.5 text-sm subHeading text-[#2E2C76]">
                  <div className="h-2 w-2 rounded-full bg-[#2E2C76]" />
                  Viral Reel March 24, 2025
                </div>

                <h2 className="text-6xl md:text-8xl leading-none tracking-tight text-[#111827] heading">
                  9,00,319
                  <br />
                  <span className="text-[#2E2C76]">Views</span>
                </h2>

                <p className="max-w-xl text-lg leading-8 text-zinc-600">
                  Our very first reel for Kalra Kitchen went viral completely
                  organically, with zero paid promotion. This is the FINCHHIVE
                  method in action: when you understand the audience deeply,
                  content performs beyond benchmarks.
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    ["8.38L+", "Accounts Reached"],
                    ["4,100+", "Likes"],
                    ["41", "Shares"],
                    ["15s", "Watch Time"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-3xl border border-[#d3d1f3] bg-[#FAFAFF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#CFC8FF] hover:shadow-[0_12px_30px_rgba(91,77,255,0.10)]"
                    >
                      <h3 className="text-2xl font-bold text-[#111827]">
                        {item[0]}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" ">
                <div className="rounded-[32px] border border-[#ECEBFF] bg-[#FCFCFF] p-6 shadow-[0_10px_40px_rgba(91,77,255,0.06)]">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-black">
                        Reel Performance
                      </h3>

                      <p className="mt-2 text-sm text-zinc-500">
                        Organic growth across all reels
                      </p>
                    </div>

                    <div className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                      +984%
                    </div>
                  </div>

                  <div className="flex h-[360px] items-end justify-between gap-5">
                    {[
                      {
                        date: "Mar 24",
                        value: "9,00,319",
                        height: "280px",
                        active: true,
                        label: "Viral",
                      },
                      {
                        date: "Apr 7",
                        value: "14,026",
                        height: "120px",
                      },
                      {
                        date: "May 1",
                        value: "23,655",
                        height: "170px",
                        label: "Strong",
                      },
                      {
                        date: "May 7",
                        value: "14,593",
                        height: "130px",
                      },
                      {
                        date: "May 8",
                        value: "23,510",
                        height: "165px",
                        label: "Strong",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-1 flex-col items-center"
                      >
                        <span className="mb-4 text-sm font-medium text-zinc-500">
                          {item.value}
                        </span>

                        <div className="relative flex w-full items-end justify-center">
                          <div
                            style={{ height: item.height }}
                            className={`
                        w-full rounded-t-[24px]
                        transition-all duration-500 hover:scale-105
                        ${
                          item.active
                            ? "bg-gradient-to-t from-[#5B4DFF] via-[#7C70FF] to-[#B7AEFF]"
                            : "bg-gradient-to-t from-[#D7D2FF] to-[#EEEAFE]"
                        }
                      `}
                          />

                          {item.active && (
                            <div className="absolute bottom-0 h-full w-full rounded-t-[24px] bg-[#5B4DFF]/30 blur-2xl" />
                          )}
                        </div>

                        <div className="mt-5 text-center">
                          <p className="text-sm font-semibold text-[#111827]">
                            {item.date}
                          </p>

                          {item.label && (
                            <span
                              className={`
                          mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]
                          ${
                            item.active
                              ? "bg-[#EEEAFE] text-[#5B4DFF]"
                              : "bg-zinc-100 text-zinc-600"
                          }
                        `}
                            >
                              {item.label}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[60px] lg:mt-[100px]">
        <div className="max-w-[1440px] mx-auto overflow-x-auto scrollbar-hidden">
          <div className="flex flex-col  items-start justify-start space-y-3">
            <SectionBadge label="Complete Performance Data" />
            <SectionTitle
              className="text-start!"
              title={
                <>
                  Every reel outperformed <br /> the baseline.
                </>
              }
            />
            <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
              Across all 5 reels produced for Kalra Kitchen, not a single one
              performed at or below the account&apos;s typical reel benchmark.
              Every piece of content FINCHHIVE created exceeded expectations.
            </p>
          </div>

          <table className="w-full min-w-[1000px]  rounded-3xl overflow-hidden mt-10">
            <thead className="bg-white/50 subHeading">
              <tr>
                {[
                  "Reel",
                  "Views",
                  "Reach",
                  "Likes",
                  "Comments",
                  "Shares",
                  "Saves",
                  "Follows",
                  "Watch Time",
                ].map((head) => (
                  <th
                    key={head}
                    className="text-left px-6 py-5 text-sm text-zinc-400"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {reelData.map((item, i) => (
                <tr
                  key={i}
                  className="border-t border-white hover:bg-white subHeading"
                >
                  <td className="px-6 py-5">{item.date}</td>
                  <td className="px-6 py-5">{item.views}</td>
                  <td className="px-6 py-5">{item.reach}</td>
                  <td className="px-6 py-5">{item.likes}</td>
                  <td className="px-6 py-5">{item.comments}</td>
                  <td className="px-6 py-5">{item.shares}</td>
                  <td className="px-6 py-5">{item.saves}</td>
                  <td className="px-6 py-5">{item.follows}</td>
                  <td className="px-6 py-5">{item.watch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {kalrasKitchen.map((item) => (
            <ReelCard key={item.video} item={item} />
          ))}
        </div>
        <div className="max-w-[850px] mx-auto">
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative w-full bg-zinc-100">
                  <Image
                    src={reel.image}
                    alt="Instagram Reel Screenshot"
                    width={500}
                    height={700}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 py-28">
        <div className="flex flex-col  items-center justify-center space-y-3 max-w-4xl mx-auto text-center">
          <SectionBadge label="The Real Result" />
          <SectionTitle
            className="max-w-3xl  mx-auto"
            title={
              <>
                Numbers are proof.
                <br />
                <span className="italic text-black/40">
                  But Footfall is the real win.
                </span>
              </>
            }
          />
          <p className="text-zinc-400 leading-9 text-lg subHeading">
            Beyond the metrics on a screen, Kalra Kitchen experienced something
            that can&apos;t be faked: real customers walking through the door
            because they discovered the brand through our reels. People who had
            never heard of Kalra Kitchen saw a piece of content, felt hungry,
            and made the trip. That is the FINCHHIVE definition of success not
            vanity metrics, but actual business growth driven by digital
            strategy.
          </p>
          <p className="text-zinc-400 leading-9 text-lg subHeading">
            Every reel FINCHHIVE created showed the exact same pattern in
            Instagram&apos;s data: a sharp, steep pink growth curve far above
            the flat grey &quot;typical reel&quot; benchmark. This happened
            consistently not once, not by luck, but by design.
          </p>
        </div>
      </section>
      <section className="mt-[50px] ">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col  items-center justify-center space-y-3">
            <SectionBadge label="Key Insights" />
            <SectionTitle className="" title="What the data taught us." />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 ">
            {insights.map((item) => (
              <div
                key={item.no}
                className="rounded-3xl border border-black/10 bg-white p-8 "
              >
                <span className="text-[#2E2C76] text-5xl font-bold">
                  {item.no}
                </span>

                <h3 className="text-2xl font-semibold mt-6 leading-snug">
                  {item.title}
                </h3>

                <p className="text-zinc-400 mt-5 leading-8">{item.desc}</p>

                <div className="mt-6 inline-flex px-4 py-2 rounded-full border border-[#2E2C76]/20 bg-[#2E2C76]/10 text-[#2E2C76] text-sm">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-14 py-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col  items-start justify-start space-y-3 ">
            <SectionBadge label="Key Insights" />
            <SectionTitle
              className="text-start"
              title={
                <>
                  This is not content creation. <br /> This is digital growth
                  engineering.
                </>
              }
            />
            <p className="text-zinc-400 leading-9 text-lg subHeading">
              Other agencies shoot and post. FINCHHIVE studies, strategizes,
              executes, and scales.
            </p>
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
      </section>
    </main>
  );
}
