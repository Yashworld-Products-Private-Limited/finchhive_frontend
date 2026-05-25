"use client";


export default function CaseStudyPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="px-2 py-20 border-[#ECECF5]">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-sm tracking-[0.2em] uppercase  font-semibold">
            FINCHHIVE • Case Study
          </span>

          <div className="grid lg:grid-cols-2 gap-14 mt-10 items-center">
            <div>
              <h1 className="text-5xl md:text-[90px] leading-[0.95] text-[#2E2C76]  heading">
                Studio 9 India
                <br />
                <span className="italic text-zinc-300">Case Study</span>
              </h1>

              <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl mt-10">
                How authentic, raw, and process-driven content helped Studio 9
                India build trust, organic reach, and meaningful audience
                engagement without relying on trends or paid advertising.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Interior Design",
                  "Organic Growth",
                  "Instagram Strategy",
                  "Authentic Content",
                  "Community Driven",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#D9D9E8] text-sm font-medium text-[#2E2C76]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                ["34.6K+", "Total Views"],
                ["164", "Total Shares"],
                ["346", "Total Saves"],
                ["100%", "Organic — Zero Ads"],
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
        </div>
      </section>

      {/* CLIENT */}
      <section className="px-2 py-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16">
          <div className="space-y-5">
            <span className="text-[#2E2C76] font-semibold uppercase tracking-[0.2em] text-sm">
              01 • The Client
            </span>

            <h2 className="heading text-4xl md:text-5xl mt-5 text-[#2E2C76]">
              Studio 9 India. A premium interior design studio.
            </h2>
            <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl">
              Studio 9 India is a high-quality interior design practice known
              for thoughtful spatial design, considered material choices, and
              spaces that feel genuinely lived-in rather than staged. Their work
              speaks for itself — when it&apos;s shown the right way.
            </p>
            <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl ">
              The challenge wasn&apos;t the quality of work. The challenge was
              translating that quality into digital content without losing the
              authenticity that makes the brand worth following.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-[#ECECF5] rounded-3xl p-7 bg-[#FAFAFF]">
              <h3 className="text-[#2E2C76] font-semibold text-lg">
                Brand Identity
              </h3>

              <p className="subHeading mt-3">
                Premium interior design with a philosophy rooted in real spaces,
                real craftsmanship, and honest process — not curated fantasy.
                The work earns attention by being genuinely good.
              </p>
            </div>

            <div className="border border-[#ECECF5] rounded-3xl p-7 bg-[#FAFAFF]">
              <h3 className="text-[#2E2C76] font-semibold text-lg">
                The Platform
              </h3>

              <p className="subHeading mt-3">
                Instagram — the primary discovery platform for interior design
                in India. Where clients research, save references, and decide
                who to trust with their space.
              </p>
            </div>

            <div className="border border-[#ECECF5] rounded-3xl p-7 bg-[#FAFAFF]">
              <h3 className="text-[#2E2C76] font-semibold text-lg">The Goal</h3>

              <p className="subHeading mt-3">
                Build an Instagram presence that earns genuine engagement, brand
                credibility, and real enquiries — without compromising the
                studio&apos;s identity with cheap trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 md:px-16 py-24 bg-[#F8F8FC]">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-[#2E2C76] font-semibold uppercase tracking-[0.2em] text-sm">
            02 • The Problem
          </span>

          <div className="grid lg:grid-cols-2 gap-16 mt-10">
            <div className="space-y-6">
              <h2 className="heading text-4xl md:text-5xl text-[#2E2C76]">
                Most interior design pages look exactly the same.
              </h2>
              <div className="">
                <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl">
                  Trending audio under a polished photo. A meme reposted. A
                  carousel of Pinterest-style renders. Content that gets
                  scrolled past because it offers nothing real.
                </p>
                <span className="mt-2">
                  The standard interior design playbook — and why it fails
                </span>
              </div>
              <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl">
                The interior design niche on Instagram is flooded with
                over-produced, artificially lit, heavily filtered content that
                feels like a showroom brochure rather than a real space.
                Audiences are numb to it. They scroll past. They don&apos;t share it.
                They don&apos;t trust it.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "What was happening across the niche",
                  des: "Over-edited final shots with no context. Trending Reels audio pasted under interiors. Meme formats used to stay relevant. Content that chases algorithm tricks instead of building trust.",
                },
                {
                  title: "The Audience Problem",
                  des: "Interior design clients are high-consideration buyers. They research extensively. They notice inauthenticity immediately. Gimmicky content actively damages trust with the exact audience a premium studio needs to reach.",
                },
                {
                  title: "The Opportunity",
                  des: "In a feed full of fake, a brand that shows the real process — the site visits, the decisions, the work in progress — stands out immediately. Authenticity is a competitive advantage nobody else was using.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#ECECF5] rounded-3xl p-7 transition-all duration-300 hover:border-[#2E2C76]/30 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[48px] h-12 rounded-2xl bg-[#2E2C76]/10 flex items-center justify-center text-[#2E2C76] font-semibold">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="heading text-xl">{item.title}</h3>

                      <p className="subHeading mt-3">{item.des}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-[1440px] mx-auto">
          <span className="text-[#2E2C76] font-semibold uppercase tracking-[0.2em] text-sm">
            03 • The FINCHHIVE Approach
          </span>

          <h2 className="heading text-4xl md:text-5xl mt-5 max-w-4xl text-[#2E2C76]">
            Raw. Real. No fake game.
          </h2>
          <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl">
            FINCHHIVE&apos;s content strategy for Studio 9 India was built on a
            single conviction: the most powerful content this brand could create
            was the honest documentation of its own work. Not polished. Not
            trended. Trusted.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                no: "01",
                title: "Real Site Visit Documentation",
                desc: "Instead of staged final photography, we film the actual work-in-progress — the site visits, the raw spaces mid-execution, the decisions being made in real time. This gives viewers something no other account offers: access to the real process.",
              },
              {
                no: "02",
                title: "Authentic Visual Language",
                desc: "No artificial lighting setups on location. No heavy filter grading to make spaces look like they're from a different dimension. Natural light, real textures, honest angles. The spaces look like spaces — because they are.",
              },
              {
                no: "03",
                title: "Zero Trend Dependency",
                desc: "No trending audio. No meme formats. No hopping on whatever is viral this week. The content is built to have a shelf life — content that people save, revisit, and share weeks after it's posted because the value doesn't expire.",
              },
              {
                no: "04",
                title: "Show the process, not just the result",
                desc: "Before-during-after documentation gives audiences context, builds credibility, and makes the final transformation genuinely impactful. You can't fake a construction site.",
              },
              {
                no: "03",
                title: "Audience over algorithm",
                desc: "We create content that the right person — a homeowner planning a renovation — would want to save, share with their spouse, and come back to. That behavior signals quality to the algorithm anyway.",
              },
              {
                no: "04",
                title: "Trust is the product",
                desc: "For a premium interior design studio, every piece of content is a trust signal. Consistent, honest, high-quality content doesn't just grow followers — it grows a pipeline of qualified enquiries.",
              },
            ].map((item, i) => (
              <div
                key={item.no}
                className="rounded-3xl border border-black/10 bg-white/[0.6] p-8"
              >
                <span className="text-[#2E2C76] text-5xl font-bold">
                  {item.no}
                </span>

                <h3 className="text-2xl font-semibold mt-6 leading-snug">
                  {item.title}
                </h3>
                <p className="text-zinc-400 mt-5 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Content */}
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-[0.25em] text-[#2E2C76] font-semibold flex items-center gap-3">
              04 — WHAT MAKES IT DIFFERENT
            </span>

            <h2 className="heading text-4xl md:text-6xl leading-[1.1] mt-6">
              Every other interior
              <br />
              page does{" "}
              <span className="text-[#2E2C76]">this differently.</span>
            </h2>

            <p className="subHeading mt-7 max-w-2xl">
              The content approach built for Studio 9 India is a deliberate
              inversion of what the rest of the niche does. The differences are
              not subtle, they are philosophical.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid lg:grid-cols-3 mt-16 border border-[#E8E8F2] rounded-[32px] overflow-hidden bg-[#FCFCFF]">
            {[
              {
                bad: "OTHERS",
                good: "STUDIO 9",
                title: "Final shots vs. Real process",
                des: "Most brands only showcase polished final reveals. Studio 9 documents the raw process, material decisions, site visits, and transformation journey creating emotional connection and trust.",
              },
              {
                bad: "TREND BAIT",
                good: "TIMELESS",
                title: "Trending audio vs. Real voice",
                des: "Instead of temporary trends, the content focuses on long-term value. People save and revisit the content because it feels useful, authentic, and emotionally real.",
              },
              {
                bad: "VOLUME",
                good: "DEPTH",
                title: "Posting quantity vs. Posting meaning",
                des: "Rather than posting daily for algorithms, every post is designed to create saves, shares, and genuine engagement from homeowners planning real projects.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 md:p-10 relative ${
                  index !== 2 ? "lg:border-r border-[#E8E8F2]" : ""
                }`}
              >
                {/* Pills */}
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-[#F4F4FB] border border-[#E4E4F2]">
                    <span className="text-[11px] tracking-[0.18em] font-semibold text-black/70">
                      {item.bad}
                    </span>
                  </div>

                  <div className="w-5 h-[1px] bg-black/20" />

                  <div className="px-3 py-1 rounded-full bg-[#2E2C76]/10 border border-[#2E2C76]/20">
                    <span className="text-[11px] tracking-[0.18em] font-semibold text-[#2E2C76]">
                      {item.good}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="subHeading mt-5 leading-[1.9]">{item.des}</p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2E2C76] to-transparent opacity-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAPH SECTION */}
      <section className="px-6 md:px-16 py-24 ">
        <div className="max-w-[1440px] mx-auto">
          {/* Heading */}
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.25em] text-[#2E2C76] font-semibold flex items-center gap-3">
              05 — THE RESULTS
            </span>

            <h2 className="heading text-4xl md:text-6xl leading-[1.1] mt-6 text-[#2E2C76]">
              People share it
              <br />
              because they love it.
            </h2>
          </div>

          {/* Top Layout */}
          <div className="grid lg:grid-cols-2 gap-14 mt-16 items-start">
            {/* Left Content */}
            <div>
              <p className="subHeading leading-[2]">
                The numbers from Studio 9 India’s content tell a story no
                trend-chasing account can replicate. A single reel titled
                <span className="italic text-black">
                  {" "}
                  “Design isn’t just what you see… it’s what you feel”
                </span>{" "}
                earned 164 shares and 103 saves organically. People did not just
                watch it. They sent it to someone they love.
              </p>

              <p className="subHeading leading-[2] mt-7">
                Across all content, 69.7% of views on posts are coming from
                non-followers, new audiences discovering the brand purely
                through the quality of what is being put out. And with
                90.5–91.1% of views coming from Feed, the algorithm is actively
                distributing the content to people it knows will engage.
              </p>

              <p className="subHeading leading-[2] mt-7">
                294 profile visits from a single post. 80 profile activity
                events from another. These are people who watched a piece of
                content and immediately went to learn more about the studio.
                That is a warm enquiry waiting to happen.
              </p>

              {/* Quote Card */}
              <div className="mt-10 border border-[#E8E8F2] rounded-[28px] p-8 bg-[#FAFAFF] relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#2E2C76]" />

                <p className="text-black/80 italic text-lg leading-[1.9]">
                  “164 shares on a single reel with zero paid promotion, zero
                  trending audio, and zero gimmicks. Just honest documentation
                  of real design work. That number does not lie.”
                </p>

                <div className="mt-8 text-[#2E2C76] text-xs tracking-[0.2em] uppercase font-semibold">
                  FINCHHIVE — Studio 9 India Content Results
                </div>
              </div>
            </div>

            {/* Right Stats Card */}
            <div className="border border-[#E8E8F2] rounded-[32px] p-10 bg-[#FCFCFF] sticky top-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2E2C76]/10 border border-[#2E2C76]/20">
                <div className="w-2 h-2 rounded-full bg-[#2E2C76]" />

                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#2E2C76]">
                  Top Reel — Apr 10
                </span>
              </div>

              <p className="italic text-black/50 text-sm mt-6">
                “Design isn’t just what you see… it’s what you feel.”
              </p>

              <div className="mt-5">
                <h3 className="text-7xl font-bold text-[#2E2C76] leading-none">
                  11,712
                </h3>

                <p className="uppercase tracking-[0.18em] text-xs text-black/50 mt-4">
                  Total Views · IG 11,519 + FB 193
                </p>
              </div>

              <div className="h-px bg-[#E8E8F2] my-8" />

              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[
                  {
                    value: "164",
                    label: "Shares",
                  },
                  {
                    value: "103",
                    label: "Saves",
                  },
                  {
                    value: "274",
                    label: "Likes",
                  },
                  {
                    value: "19h 10m",
                    label: "Total Watch Time",
                  },
                  {
                    value: "555",
                    label: "Interactions",
                  },
                  {
                    value: "47",
                    label: "Profile Activity",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h4 className="text-3xl font-bold text-black">
                      {item.value}
                    </h4>

                    <p className="uppercase tracking-[0.16em] text-xs text-black/50 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-20 border border-[#E8E8F2] rounded-[32px] overflow-hidden">
            {/* Table Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-6 bg-[#FAFAFF] border-b border-[#E8E8F2]">
              <h3 className="text-xl font-semibold text-[#2E2C76]">
                All Content — Performance Overview
              </h3>

              <p className="text-sm text-black/50 mt-2 md:mt-0">
                Data as of May 2026
              </p>
            </div>

            {/* Desktop Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead className="bg-white">
                  <tr className="border-b border-[#E8E8F2]">
                    {[
                      "Content",
                      "Views",
                      "Reached",
                      "Likes",
                      "Shares",
                      "Saves",
                      "Profile Visits",
                      "Follows",
                    ].map((item) => (
                      <th
                        key={item}
                        className="text-left px-8 py-5 text-[12px] uppercase tracking-[0.15em] text-black/50 font-semibold"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      content: "Reel — Apr 10",
                      desc: `"Design isn't just what you see..."`,
                      views: "11,712",
                      reached: "—",
                      likes: "274",
                      shares: "164",
                      saves: "103",
                      visits: "47 activity",
                      follows: "—",
                    },
                    {
                      content: "Post — Apr 5",
                      desc: "Feed",
                      views: "9,388",
                      reached: "5,144",
                      likes: "181",
                      shares: "105 sends",
                      saves: "83",
                      visits: "294",
                      follows: "51",
                    },
                    {
                      content: "Post — May 9",
                      desc: "91.1% Feed",
                      views: "6,945",
                      reached: "3,493",
                      likes: "129",
                      shares: "79 sends",
                      saves: "57",
                      visits: "99",
                      follows: "12",
                    },
                    {
                      content: "Post — Recent",
                      desc: "69.7% Non-followers",
                      views: "6,510",
                      reached: "—",
                      likes: "211",
                      shares: "41",
                      saves: "12",
                      visits: "80 activity",
                      follows: "—",
                    },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#E8E8F2] hover:bg-[#FAFAFF] transition-colors"
                    >
                      <td className="px-8 py-7">
                        <div>
                          <p className="font-semibold text-black">
                            {item.content}
                          </p>

                          <p className="text-sm italic text-black/50 mt-2">
                            {item.desc}
                          </p>
                        </div>
                      </td>

                      <td className="px-8 py-7 text-2xl font-bold text-[#2E2C76]">
                        {item.views}
                      </td>

                      <td className="px-8 py-7 text-black/70">
                        {item.reached}
                      </td>

                      <td className="px-8 py-7 text-black/70">{item.likes}</td>

                      <td className="px-8 py-7 font-semibold text-[#2E2C76]">
                        {item.shares}
                      </td>

                      <td className="px-8 py-7 text-black/70">{item.saves}</td>

                      <td className="px-8 py-7 text-black/70">{item.visits}</td>

                      <td className="px-8 py-7 text-black/70">
                        {item.follows}
                      </td>
                    </tr>
                  ))}

                  {/* Total Row */}
                  <tr className="bg-[#FAFAFF]">
                    <td className="px-8 py-7 text-[#2E2C76] font-bold uppercase tracking-[0.15em] text-sm">
                      Total
                    </td>

                    <td className="px-8 py-7 text-3xl font-bold text-[#2E2C76]">
                      34,555
                    </td>

                    <td className="px-8 py-7 font-semibold text-black">
                      8,637+
                    </td>

                    <td className="px-8 py-7 font-semibold text-black">795</td>

                    <td className="px-8 py-7 font-bold text-[#2E2C76]">389</td>

                    <td className="px-8 py-7 font-semibold text-black">255</td>

                    <td className="px-8 py-7 font-semibold text-black">473+</td>

                    <td className="px-8 py-7 font-semibold text-black">63+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-10 border border-[#E8E8F2] rounded-[32px] overflow-hidden">
            {[
              {
                title: "Total Views",
                value: "34.5K+",
                des: "Across tracked content",
                tag: "100% Organic",
              },
              {
                title: "Total Shares + Sends",
                value: "389",
                des: "Voluntarily sent to others",
                tag: "Strongest trust signal",
              },
              {
                title: "Non-Follower Reach",
                value: "69.7%",
                des: "New audiences discovering brand",
                tag: "Organic discovery",
              },
              {
                title: "Profile Visits",
                value: "473+",
                des: "People researching the studio",
                tag: "Warm enquiry pipeline",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 bg-[#FCFCFF] ${
                  index !== 3
                    ? "border-b md:border-b-0 md:border-r border-[#E8E8F2]"
                    : ""
                }`}
              >
                <p className="uppercase tracking-[0.15em] text-xs text-black/50 font-semibold">
                  {item.title}
                </p>

                <h3 className="text-5xl font-bold text-[#2E2C76] mt-5">
                  {item.value}
                </h3>

                <p className="subHeading mt-4">{item.des}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-[#2E2C76] text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#2E2C76]" />
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24  overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Heading */}
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.25em] text-[#2E2C76] font-semibold flex items-center gap-3">
              06 — THE REAL-WORLD IMPACT
            </span>

            <h2 className="heading text-4xl md:text-6xl leading-[1.1] mt-6 text-[#2E2C76]">
              Content that
              <br />
              builds the business.
            </h2>

            <p className="subHeading mt-8 max-w-3xl leading-[2]">
              The impact of authentic content is not always measured in a single
              viral number. For Studio 9 India, it is measured in the quality
              and warmth of the audience relationship and what that relationship
              converts into.
            </p>
          </div>

          {/* Main Feature Card */}
          <div className="mt-16 border border-[#E8E8F2] rounded-[36px] bg-white overflow-hidden">
            <div className="grid lg:grid-cols-[240px_1fr]">
              {/* Left Number */}
              <div className="bg-[#F5F5FD] flex items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-[#E8E8F2]">
                <h3 className="text-[90px] md:text-[120px] font-bold text-[#2E2C76]/15 leading-none">
                  164
                </h3>
              </div>

              {/* Right Content */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2E2C76] leading-snug">
                  164 shares on one reel, people sending design to someone they
                  love
                </h3>

                <p className="subHeading mt-6 leading-[2]">
                  The reel{" "}
                  <span className="italic text-black">
                    “Design isn&apos;t just what you see… it&apos;s what you feel”
                  </span>{" "}
                  earned 164 organic shares, 103 saves, and 19 hours of total
                  watch time with zero paid promotion and zero trend-chasing.
                </p>

                <p className="subHeading mt-6 leading-[2]">
                  People watched it and immediately sent it to a spouse, a
                  family member, or a friend planning a renovation. That
                  behavior is the highest signal an interior design brand can
                  receive on Instagram. It cannot be bought. It is earned
                  entirely through content that feels genuinely real.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                icon: "📊",
                title: "294 profile visits from a single post",
                des: "One post drove 294 people to immediately visit the Studio 9 profile to learn more. That is 294 warm leads in a single content cycle, people who saw the work, were interested, and wanted to investigate further.",
              },
              {
                icon: "📌",
                title: "255+ saves, bookmarked for later",
                des: "Interior design has a long purchase consideration window. 255+ saves across content means viewers are actively collecting Studio 9’s work as a reference for their own renovation and future plans.",
              },
              {
                icon: "🌐",
                title: "69.7% non-follower views",
                des: "Nearly 70% of views on certain posts came from people who did not yet follow the account. The content quality itself was doing the discovery work organically.",
              },
              {
                icon: "🔗",
                title: "90.5–91.1% Feed source",
                des: "Instagram’s Feed algorithm actively pushed the content to relevant audiences because viewer behavior like saves, shares, and watch time signaled strong quality.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E8E8F2] rounded-[30px] p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#2E2C76]/10 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-2xl font-semibold text-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="subHeading mt-5 leading-[1.9]">{item.des}</p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 h-[3px] w-full bg-gradient-to-r from-[#2E2C76] to-transparent opacity-20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          {/* Top Heading */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-[#2E2C76] font-semibold flex items-center gap-3">
                07 — THE FINCHHIVE PHILOSOPHY
              </span>

              <h2 className="heading text-4xl md:text-6xl leading-[1.08] mt-6">
                Authenticity isn&apos;t
                <br />
                a tactic.
                <br />
                <span className="text-[#2E2C76]">It&apos;s a strategy.</span>
              </h2>

              <div className="space-y-7 mt-10">
                <p className="subHeading leading-[2]">
                  Most agencies treat authenticity as an aesthetic choice, a
                  filter, a style, or a way to make content look more “real.”
                  FINCHHIVE treats it as a strategic foundation. Especially for
                  high-consideration, high-trust categories like interior
                  design.
                </p>

                <p className="subHeading leading-[2]">
                  When a client is about to spend lakhs on their home, they are
                  not buying a product. They are buying a relationship with a
                  studio, its taste, its process, its people, and its
                  reliability. Content that documents the real work is the most
                  direct path to building that relationship at scale.
                </p>

                <p className="subHeading leading-[2]">
                  Studio 9 India does not need to go viral. It needs the right
                  people, people planning renovations, people with budget, and
                  people who care about quality to find the content, trust it,
                  and act on it. That is what the content system is engineered
                  to deliver.
                </p>
              </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-6">
              {/* Never Do */}
              <div className="border border-[#E8E8F2] rounded-[30px] p-8 bg-[#FCFCFF]">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2E2C76]" />

                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2E2C76]">
                    WHAT WE NEVER DO
                  </span>
                </div>

                <div className="space-y-5 mt-8">
                  {[
                    "Trending audio pasted over interior shots",
                    "Meme formats or pop culture references",
                    "Over-edited, artificial final shots",
                    "Clickbait hooks with no substance",
                    "Generic motivational captions",
                    "Content designed for the algorithm, not the audience",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#2E2C76]/10 flex items-center justify-center mt-[2px]">
                        <span className="text-[#2E2C76] text-xs font-bold">
                          ✕
                        </span>
                      </div>

                      <p className="text-black/75 leading-[1.8]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Always Do */}
              <div className="border border-[#E8E8F2] rounded-[30px] p-8 bg-[#FCFCFF]">
                <div className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2E2C76]" />

                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2E2C76]">
                    WHAT WE ALWAYS DO
                  </span>
                </div>

                <div className="space-y-5 mt-8">
                  {[
                    "Document real site visits, raw and honest",
                    "Show the process, not just the result",
                    "Use natural light and real-life framing",
                    "Create content the right audience will save",
                    "Build content worth sharing to a loved one",
                    "Let the quality of the work speak for itself",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#2E2C76]/10 flex items-center justify-center mt-[2px]">
                        <span className="text-[#2E2C76] text-xs font-bold">
                          ✓
                        </span>
                      </div>

                      <p className="text-black/75 leading-[1.8]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
