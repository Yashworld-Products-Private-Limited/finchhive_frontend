"use client";

import { Marquee } from "@/components/ui/marquee";
import dynamic from "next/dynamic";

const ReelCard = dynamic(() => import("@/components/ReelsMarquee").then((mod) => mod.ReelCard), {
  ssr: false,
  loading: () => (
    <div className="mx-2 sm:mx-2.5 md:mx-3 block h-[380px] w-[240px] sm:h-[440px] sm:w-[280px] md:h-[500px] md:w-[320px] rounded-[18px] sm:rounded-[22px] md:rounded-[24px] bg-neutral-900 animate-pulse" />
  ),
});
import { veidor } from "@/constants";
import {
  BarChart3,
  Bookmark,
  Clapperboard,
  Eye,
  Heart,
  LayoutGrid,
  MessageCircle,
  Scissors,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const reelData = [
  {
    title: "Brand Launch Hero Reel",
    views: "1,14,060",
    likes: 618,
    comments: 49,
    shares: "3000+",
    saves: "1.1K",
    reach: "Instagram 1,14,003 + Facebook 57",
    watch: "6d 13h 18m 12s",
    badge: "Top Performer",
  },
  {
    title: "Veidor: The Rooted Flow",
    views: "73,138",
    likes: 213,
    comments: 21,
    shares: 127,
    saves: 19,
    reach: "59,338 unique accounts",
    watch: "1d 0h 33m 27s",
    badge: "0:47 Reel",
  },
  {
    title: "Collection Reel Reel 3",
    views: "28,124",
    likes: 627,
    comments: 25,
    shares: 220,
    saves: 16,
    reach: "Instagram 28,106 + Facebook 18",
    watch: "2d 0h 15m 15s",
    badge: "28K Views",
  },
  {
    title: "Lines that whisper elegance...",
    views: "22,791",
    likes: 73,
    comments: 7,
    shares: 79,
    saves: 8,
    reach: "18,714 unique accounts",
    watch: "4h 52m 8s",
    badge: "0:24 Reel",
  },
  {
    title: "Brand Lifestyle Reel Reel 5",
    views: "25,245",
    likes: 343,
    comments: 32,
    shares: 218,
    saves: 11,
    reach: "Instagram 25,040 + Facebook 205",
    watch: "1d 20h 0m 24s",
    badge: "25K Views",
  },
  {
    title: "Product Storytelling Reel 6",
    views: "15,996",
    likes: 295,
    comments: 46,
    shares: 141,
    saves: 8,
    reach: "Instagram 15,982 + Facebook 14",
    watch: "22h 3m 20s",
    badge: "16K Views",
  },
];

const performance = [
  { label: "Hero Reel", value: 114060 },
  { label: "Reel 2", value: 73138 },
  { label: "Reel 3", value: 28124 },
  { label: "Reel 4", value: 22791 },
  { label: "Reel 5", value: 25245 },
  { label: "Reel 6", value: 15996 },
];

const executionData = [
  {
    icon: Clapperboard,
    title: "Raw Studio Shoots",
    description:
      "On-location product and lifestyle shoots with a raw, authentic quality that resonated with modern fashion audiences.",
    tag: "Authentic Visuals",
  },
  {
    icon: Scissors,
    title: "Cinematic Editing",
    description:
      "High-end post-production including color grading, transitions, motion graphics, and audio design tailored for each platform.",
    tag: "Premium Editing",
  },
  {
    icon: LayoutGrid,
    title: "Content Architecture",
    description:
      "Strategic content planning with storytelling reels, product showcases, and branded visuals to keep audiences engaged consistently.",
    tag: "Structured Strategy",
  },
  {
    icon: BarChart3,
    title: "Platform Optimization",
    description:
      "Each reel was optimized for Instagram’s algorithm using strong hooks, captions, hashtag strategy, and posting schedules.",
    tag: "Algorithm Focused",
  },
];

export default function CaseStudyPage() {
  const maxValue = Math.max(...performance.map((item) => item.value));

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2E2C76]/20 bg-[#2E2C76]/5 px-5 py-2 text-sm  text-[#2E2C76]">
            <Sparkles size={16} />
            Social Media Brand Launch
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
            <div>
              <h1 className="heading text-5xl md:text-7xl  leading-[1.05] text-[#2E2C76]">
                From Zero
                <br />
                to 1 Lakh
                <br />
                Organic Views
              </h1>

              <p className="subHeading mt-8 text-lg leading-8 text-gray-600 max-w-2xl">
                How FINCHHIVE launched a premium shirt brand on Instagram
                through cinematic reels, strategic content architecture, and
                100% organic reach no paid ads, no shortcuts.
              </p>

              <div className="mt-8 inline-flex rounded-full bg-[#2E2C76] px-6 py-3 text-sm font-semibold text-white">
                100% Organic Reach • Zero Ad Spend
              </div>

              <div className="grid sm:grid-cols-3 gap-5 mt-12">
                {[
                  {
                    value: "1,14,060",
                    label: "Peak Reel Views",
                  },
                  {
                    value: "2,64,354",
                    label: "Total Views",
                  },
                  {
                    value: "2.5K+",
                    label: "Shares",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-[#2E2C76]/10 bg-[#F7F8FF] p-6"
                  >
                    <h3 className="text-3xl  text-[#2E2C76] subHeading">
                      {item.value}
                    </h3>
                    <p className="subHeading mt-2 text-sm text-gray-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* GRAPH */}
            <div className="rounded-[32px] border border-[#2E2C76]/10 bg-[#F8F9FF] p-8">
              <div className="flex items-center gap-3 mb-10">
                <BarChart3 className="text-[#2E2C76]" />
                <h3 className="heading text-2xl  text-[#2E2C76]">
                  Reel Performance
                </h3>
              </div>

              <div className="space-y-6">
                {performance.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="subHeading text-sm text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-[#2E2C76]">
                        {item.value.toLocaleString()}
                      </span>
                    </div>

                    <div className="h-4 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[#2E2C76]"
                        style={{
                          width: `${(item.value / maxValue) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="subHeading text-sm text-gray-500">
                      Campaign Growth
                    </p>
                    <h4 className="text-3xl  text-[#2E2C76]">264K+</h4>
                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E2C76] text-white">
                    <TrendingUp size={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 border-t border-[#2E2C76]/10 pt-8 text-sm text-gray-600">
            <span>Client Premium Shirt Brand</span>
            <span>•</span>
            <span>Platform Instagram + Facebook</span>
            <span>•</span>
            <span>Reach 100% Organic</span>
            <span>•</span>
            <span>FINCHHIVE Digital Platform Solutions</span>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="px-6 md:px-10 py-24 bg-[#F8F9FF]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E2C76]">
              01 The Challenge
            </span>

            <h2 className="heading mt-6 text-4xl md:text-5xl  leading-tight text-[#2E2C76]">
              A Brand New Label.
              <br />
              Zero Digital Presence.
            </h2>

            <p className="subHeading mt-8 text-lg leading-8 text-gray-600">
              The client was launching a premium shirt brand with no existing
              social media presence, no follower base, and no prior digital
              footprint. The challenge was not just content creation it was
              engineering a brand identity from scratch and making it visible in
              a highly competitive fashion market.
            </p>

            <p className="subHeading mt-5 text-lg leading-8 text-gray-600">
              Every view, every follower, every share had to be earned through
              creative excellence and strategic execution not paid through ads.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "No existing audience or brand recall in the market",
                "Premium positioning required polished, cinematic content",
                "Zero ad budget entirely organic growth strategy",
                "Fashion is one of the most crowded niches on Instagram",
                "Content needed to function as both brand awareness and conversion tool",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-2xl border border-[#2E2C76]/10 bg-white p-5"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#2E2C76]" />
                  <span className="subHeading text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] bg-white p-10 border border-[#2E2C76]/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E2C76] text-white">
              <Target size={28} />
            </div>

            <blockquote className="mt-8 text-3xl font-semibold leading-relaxed text-[#2E2C76]">
              “The brand had exceptional product quality but needed a digital
              voice that matched its premium promise.”
            </blockquote>

            <p className="subHeading mt-6 text-gray-500">
              FINCHHIVE Strategy Brief Pre-Launch Assessment
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E2C76]">
            02 The Strategy
          </span>

          <h2 className="heading mt-6 text-4xl md:text-5xl  text-[#2E2C76]">
            Three Pillars of Organic Authority
          </h2>

          <p className="subHeading mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            FINCHHIVE built the brand launch around a three-pillar content
            strategy designed to trigger Instagram&apos;s algorithm, create
            emotional resonance with the audience, and establish premium brand
            positioning from day one.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Clapperboard />,
                title: "Cinematic Production",
                desc: "Raw studio shoots combined with high-profile cinematic editing and color grading. Every frame was designed to communicate premium quality because on Instagram, aesthetics are the first impression.",
                tag: "Raw Shoot · Cinematic Edit",
              },
              {
                icon: <Target />,
                title: "Hook-First Architecture",
                desc: "Reels were scripted and structured around the first 1–2 seconds. A powerful visual hook held retention, which in turn fed the algorithm more distribution compounding reach organically.",
                tag: "Retention · Algorithm-Driven",
              },
              {
                icon: <Share2 />,
                title: "Share-Worthy Storytelling",
                desc: "Content was designed to be shared, not just watched. Emotional brand storytelling, aspirational visuals, and strong brand presence made viewers want to tag others and re-share generating 2.5K+ shares on a single reel.",
                tag: "Brand Recall · Share Triggers",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-[#2E2C76]/10 bg-[#F8F9FF] p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2E2C76] text-white">
                  {item.icon}
                </div>

                <h3 className="heading mt-8 text-2xl  text-[#2E2C76]">
                  {item.title}
                </h3>

                <p className="subHeading mt-5 text-gray-600 leading-7">
                  {item.desc}
                </p>
                <div className="mt-6 inline-flex px-4 py-2 rounded-full border border-[#2E2C76]/20 bg-[#2E2C76]/10 text-[#2E2C76] text-sm">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.35em] uppercase text-[#2E2C76]">
              03 The Execution
            </span>

            <div className="h-px w-28 bg-[#2E2C76]/20" />
          </div>

          <h2 className="heading text-4xl md:text-6xl leading-tight text-[#2E2C76] max-w-4xl">
            What <span className="italic">FINCHHIVE</span> Delivered
          </h2>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {executionData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[28px] border border-[#2E2C76]/10 bg-[#F8F9FF] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2E2C76]/10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2E2C76] text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="heading mt-8 text-2xl text-[#2E2C76]">
                    {item.title}
                  </h3>

                  <p className="subHeading mt-5 text-base leading- text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-8 inline-flex rounded-full bg-[#2E2C76]/10 px-4 py-2 text-sm text-[#2E2C76]">
                    {item.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-[#F8F9FF]">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E2C76]">
            04 Campaign Results
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-6">
            <div>
              <h2 className="heading text-4xl md:text-5xl  text-[#2E2C76]">
                Six Reels. 2,64,354 Views.
              </h2>

              <p className="subHeading mt-5 text-lg text-gray-600 max-w-3xl">
                Every single view was earned organically without paid
                advertisements.
              </p>
            </div>

            <div className="rounded-3xl bg-[#2E2C76] px-8 py-5 text-white">
              <p className="text-sm opacity-80">Total Campaign Performance</p>
              <h3 className="text-4xl  mt-2">2,59,354</h3>
            </div>
          </div>

          <div className="mt-14 overflow-x-auto rounded-[32px] border border-[#2E2C76]/10 bg-white">
            <table className="w-full min-w-[1100px]">
              <thead className="border-b border-[#2E2C76]/10 bg-[#F7F8FF]">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Reel
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Views
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Likes
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Comments
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Shares
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Saves
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[#2E2C76]">
                    Watch Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {reelData.map((item, index) => (
                  <tr key={index} className="border-b border-[#2E2C76]/5">
                    <td className="px-6 py-6">
                      <div>
                        <h4 className="font-semibold text-[#2E2C76]">
                          {item.title}
                        </h4>
                        <p className="subHeading mt-1 text-sm text-gray-500">
                          {item.badge}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-6 font-semibold text-gray-800">
                      {item.views}
                    </td>

                    <td className="px-6 py-6 text-gray-700">{item.likes}</td>

                    <td className="px-6 py-6 text-gray-700">{item.comments}</td>

                    <td className="px-6 py-6 text-gray-700">{item.shares}</td>

                    <td className="px-6 py-6 text-gray-700">{item.saves}</td>

                    <td className="px-6 py-6 text-gray-700">{item.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-14">
            {[
              {
                icon: <Eye size={20} />,
                value: "2,59,354",
                label: "Total Views",
              },
              {
                icon: <Heart size={20} />,
                value: "2,169",
                label: "Total Likes",
              },
              {
                icon: <Share2 size={20} />,
                value: "3,369",
                label: "Total Shares",
              },
              {
                icon: <MessageCircle size={20} />,
                value: "180",
                label: "Total Comments",
              },
              {
                icon: <Bookmark size={20} />,
                value: "1,163",
                label: "Total Saves",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#2E2C76]/10 bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E2C76] text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-3xl  text-[#2E2C76]">{item.value}</h3>

                <p className="subHeading mt-2 text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-[60px] lg:mt-[100px]">
        <Marquee
          pauseOnHover
          className="relative flex items-center justify-center gap-6"
        >
          {veidor.map((item) => (
            <ReelCard key={item.video} item={item} />
          ))}
        </Marquee>
      </div>

      {/* INSIGHTS */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2E2C76]">
            05 Key Insights
          </span>

          <h2 className="heading mt-6 text-4xl md:text-5xl  text-[#2E2C76]">
            Why It Worked
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 mt-16">
            {[
              {
                title: "The First Reel Set the Tone",
                desc: "The hero reel the brand's very first post became the campaign's most powerful asset with 1,14,060 views and 2,500+ shares. This validated the importance of investing maximum effort in the launch reel. A strong first impression builds algorithmic momentum that cascades into subsequent content.",
              },
              {
                title: "Saves Signal Premium Positioning",
                desc: "1,100+ saves on the hero reel and 1,163 total saves across the campaign is exceptional. Saves are Instagram's highest-intent signal viewers didn't just watch, they bookmarked the content for reference. This confirms the content communicated genuine value, not just entertainment.",
              },
              {
                title: "Shares Drive Exponential Organic Reach",
                desc: "With 3,369 total shares across 6 reels and 2,500+ from the hero reel alone, the content was inherently shareable. Each share is effectively free distribution a new audience exposed to the brand without a rupee spent on ads. This is the core mechanic behind the campaign's massive organic numbers.",
              },
              {
                title: "Cinematic Quality = Premium Recall",
                desc: "The combination of raw studio shoots with high-profile cinematic editing created a visual language that felt premium from day one. In the fashion space, production quality is directly correlated with perceived brand value and this campaign proved that premium content earns premium attention.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[32px] border border-[#2E2C76]/10 bg-[#F8F9FF] p-10"
              >
                <h3 className="heading text-2xl  text-[#2E2C76]">
                  {item.title}
                </h3>

                <p className="subHeading mt-5 leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-[40px] bg-[#2E2C76] px-4 md:px-16 py-14 text-white">
            <h3 className="text-3xl md:text-4xl ">Strategic Takeaways</h3>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                "A single viral reel can establish brand identity faster than months of mediocre content",
                "Organic reach is achievable in competitive niches when production quality meets platform psychology",
                "Share rate is the true growth multiplier design content to be shared, not just watched",
                "Saves indicate aspirational buying intent critical for fashion brands",
                "Cross-platform spillover (IG → Facebook) happens naturally when content quality is high",
                "Watch time accumulation (6d+ on hero reel) signals deep content engagement, not passive scrolling",
                "Profile activity of 214 from one reel shows direct brand discovery funnel activation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/10 p-2 lg:p-5"
                >
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
