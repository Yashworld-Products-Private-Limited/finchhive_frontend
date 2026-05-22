"use client";

import SectionBadge from "@/components/SectionBadge";
import SectionTitle from "@/components/SectionTitle";

export default function CaseStudyPage() {
  return (
    <div className=" text-black overflow-x-hidden">
      <section className="max-w-[1440px] mx-auto pt-28 pb-16">
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-2 rounded-full border border-[#2E2C76]/30 bg-[#2E2C76]/10 text-[#2E2C76] text-[11px] uppercase tracking-[0.15em] font-semibold subHeading">
            Case Study
          </span>

          <span className="px-4 py-2 rounded-full border border-[#2E2C76]/30 bg-[#2E2C76]/10 text-[#2E2C76] text-[11px] uppercase tracking-[0.15em] font-semibold subHeading">
            Event Marketing
          </span>

          <span className="px-4 py-2 rounded-full border border-[#2E2C76]/30 bg-[#2E2C76]/10 text-[#2E2C76] text-[11px] uppercase tracking-[0.15em] font-semibold subHeading">
            Shiv Cult
          </span>

          <span className="px-4 py-2 rounded-full border border-black/10 bg-black/5 text-zinc-400 text-[11px] uppercase tracking-[0.15em] font-semibold subHeading">
            15 Feb 2026 · CC Dumas, Surat
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl leading-[0.95] text-[#2E2C76] max-w-5xl heading">
          Sada Shiv
          <br />
          <span className="italic text-zinc-300">
            Lord Shiva Music Festival
          </span>
        </h1>

        <p className="subHeading text-zinc-400 text-lg leading-8 max-w-3xl mt-10">
          How FINCHHIVE&apos;s 100% organic content strategy sold out every
          single ticket to Surat&apos;s most anticipated devotional music
          festival with zero paid ads, zero influencer spend, and zero boosting.
        </p>
        <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-[#2E2C76]/10 border border-[#2E2C76]/20 mt-10">
          <div className="w-3 h-3 rounded-full bg-[#2E2C76] animate-pulse"></div>
          <span className="subHeading text-[#2E2C76] text-xs md:text-sm tracking-[0.1em]">
            100% Tickets Sold Out Organic Reach Only
          </span>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            ["1.27L+", "Total Views"],
            ["3,377", "Total Shares"],
            ["1,927", "Total Likes"],
            ["429", "Saves"],
            ["147", "New Follows"],
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
      </section>

      <div className="border-t border-black/10" />

      <section className="max-w-[1440px] mx-auto">
        <div className="mt-[100px] lg:mt-[160px]">
          <div className="grid lg:grid-cols-2 gap-16 mt-10">
            <div className="flex flex-col  items-start justify-start space-y-3">
              <SectionBadge label="The Brief" />
              <SectionTitle
                className="max-w-3xl text-start!"
                title={
                  <>
                    An event that needed{" "}
                    <span className="italic text-[#2E2C76]">
                      the right audience
                    </span>{" "}
                    to find it.
                  </>
                }
              />
              <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
                Shiv Cult approached FINCHHIVE with one clear objective: sell
                out the Sada Shiv Lord Shiva Music Festival a devotional music
                event at CC Dumas, Surat, on 15th February 2026. The challenge
                was not just visibility, but precision. This event needed to
                reach deeply spiritual, culturally connected audiences not just
                random Instagram scrollers.
              </p>
              <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
                FINCHHIVE was handed a single goal: fill every seat. The tools:
                organic content only. No paid promotion. No influencer
                amplification. Just strategy, creative direction, and audience
                psychology.
              </p>
              <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl subHeading ">
                The result:{" "}
                <span className="text-[#2E2C76] font-semibold">
                  every ticket sold.
                </span>
              </p>
            </div>

            <div className="relative border border-[#2E2C76]/10 bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_rgba(46,44,118,0.08)] overflow-hidden">
              {/* top gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-[#2E2C76] via-[#5B58D6] to-[#8EA3FF]" />

              {/* soft glow */}
              <div className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-[#5B58D6]/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#8EA3FF]/10 blur-3xl" />

              {/* header */}
              <div className="relative flex items-center justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-[#2E2C76]/10">
                <div>
                  <p className="subHeading text-[10px] uppercase tracking-[0.22em] text-[#5B58D6]">
                    Event Details
                  </p>

                  <h3 className="heading text-2xl sm:text-3xl text-[#2E2C76] mt-2">
                    Sada Shiv Festival
                  </h3>
                </div>

                <div className="hidden sm:flex items-center gap-2 rounded-full bg-[#2E2C76]/5 border border-[#2E2C76]/10 px-4 py-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#5B58D6]" />

                  <span className="subHeading text-[10px] uppercase tracking-[0.18em] text-[#2E2C76]">
                    Sold Out
                  </span>
                </div>
              </div>

              {/* rows */}
              <div className="relative divide-y divide-[#2E2C76]/10">
                {[
                  ["Client", "Shiv Cult"],
                  ["Event", "Sada Shiv Lord Shiva Music Festival"],
                  ["Date", "15 February 2026, Sunday"],
                  ["Venue", "CC Dumas, Surat"],
                  ["Time", "6:30 PM onwards"],
                  ["Content Types", "Carousel Post + Reel"],
                  ["Ad Spend", "₹0 · 100% Organic"],
                  ["Outcome", "All Tickets Sold Out ✦"],
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group grid grid-cols-1 sm:grid-cols-2 gap-3 px-6 sm:px-8 py-2.5 transition-all duration-300 hover:bg-[#2E2C76]/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[#5B58D6]" />

                      <p className="subHeading text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                        {item[0]}
                      </p>
                    </div>

                    <p className="subHeading text-left sm:text-right text-zinc-800 font-semibold leading-7 group-hover:text-[#2E2C76] transition-colors duration-300">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-[100px] lg:mt-[180px]">
          <div className="rounded-[40px] border border-[#2E2C76]/20 bg-white p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[#2E2C76]/10 blur-[120px] rounded-full top-[-250px] left-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#2E2C76]/10 border border-[#2E2C76]/20">
                <span className="subHeading uppercase tracking-[0.18em] text-[#2E2C76] text-xs font-semibold">
                  The Outcome
                </span>
              </div>

              <h2 className="heading text-6xl md:text-8xl text-[#2E2C76] mt-8 leading-none">
                Sold Out.
                <br />
                100%.
              </h2>

              <p className="subHeading text-zinc-400 max-w-2xl mx-auto leading-8 mt-8">
                Every ticket for Sada Shiv was sold purely through organic
                Instagram content no paid ads, no boosts, no influencer deals.
                Content reached the right people, and the right people showed
                up.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
                {[
                  ["1,27,404", "Total Organic Views"],
                  ["91.2%", "Non-Follower Reach"],
                  ["154", "External Link Taps"],
                  ["553", "Profile Visits"],
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="heading text-4xl text-[#2E2C76] font-bold">
                      {item[0]}
                    </h3>

                    <p className="subHeading text-zinc-500 text-sm mt-2">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
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

      <section className="max-w-[1440px] mx-auto px-4">
        <div className="mt-[100px] lg:mt-[160px]">
          <section className="">
            <div className="flex flex-col  items-start justify-start space-y-3">
              <SectionBadge label="Our Strategy" />
              <SectionTitle
                className="max-w-3xl text-start!"
                title={<>Audience first. Algorithm follows.</>}
              />
              <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
                FINCHHIVE designed a two-format organic content campaign built
                around the psychology of devotion, community, and FOMO
                engineered to spread without any paid push.
              </p>
            </div>

            <div className="mt-20 space-y-14">
              {[
                {
                  no: "01",
                  title: "Audience Identification Spiritual Community Mapping",
                  desc: "Before creating a single visual, FINCHHIVE studied exactly who attends devotional music events in Surat their content consumption habits, what they share, what they save, what makes them feel seen and represented. The Sada Shiv campaign was built for this very specific audience, not for a broad generic crowd. The result: 91.2% of carousel views came from non-followers people we reached cold, purely through relevance.",
                  tags: [
                    "Devotional Audience Study",
                    "Surat Cultural Mapping",
                    "Community Behavior Research",
                  ],
                },
                {
                  no: "02",
                  title: "Dual-Format Content Architecture Post + Reel",
                  desc: "FINCHHIVE deployed two distinct content formats simultaneously a high-impact carousel post designed to drive shares and saves, and a cinematic reel designed to generate reach and emotional connection. Each format served a different purpose in the funnel: the post built desire and spreading, the reel built awareness and profile traffic. Together, they created a compounding reach effect.",
                  tags: [
                    "Carousel Engineering",
                    "Reel Strategy",
                    "Dual-Format Funnel",
                  ],
                },
                {
                  no: "03",
                  title: "Visual Design Built for Shareability",
                  desc: "The carousel post was a 4-slide visual journey event poster, artist reveal, atmosphere visuals, and a QR code call-to-action designed to be shared by devotees with family and friends. Every slide was crafted to make the viewer feel they'd miss something sacred if they didn't attend. The QR code slide drove 154 direct external link taps people actively scanning to buy tickets.",
                  tags: [
                    "Share-First Design",
                    "FOMO Architecture",
                    "QR Conversion Design",
                    "Sacred Aesthetic Direction",
                  ],
                },
                {
                  no: "04",
                  title: "Cinematic Reel Emotion Over Information",
                  desc: "The reel was not an event announcement it was an experience. FINCHHIVE created a cinematic short that made viewers feel the energy of the event before it even happened. 7 days, 11 hours, 43 minutes, and 27 seconds of total watch time tells us one thing: people weren't skipping this content. They were feeling it. That emotional pull is what converted viewers into ticket buyers.",
                  tags: [
                    "Cinematic Direction",
                    "Emotional Storytelling",
                    "Watch-Time Optimized",
                  ],
                },
                {
                  no: "05",
                  title: "Community Amplification Making Sharing Inevitable",
                  desc: "3,377 total shares across both formats is not an accident. The content was deliberately designed to be share-worthy among the devotional community. When a Shiv devotee sees this content, their instinct is to send it to their family, their friends, their mandir group. FINCHHIVE understood this psychology and built every visual to trigger that behavior without asking for it explicitly.",
                  tags: [
                    "Community Psychology",
                    "Organic Amplification Design",
                    "Share Trigger Engineering",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[120px_1fr] gap-4 lg:gap-8 border border-white/10 bg-white/[0.03] "
                >
                  <div className="text-4xl lg:text-6xl heading text-[#726f6f] italic">
                    {item.no}
                  </div>

                  <div className="space-y-4 lg:max-w-[60%]">
                    <h3 className="text-2xl lg:text-3xl heading">
                      {item.title}
                    </h3>

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

        <section className="mt-[100px] lg:mt-[180px] relative overflow-hidden">
          {/* soft glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[#2E2C76]/5 blur-3xl" />

          <div className="relative ">
            <div className="flex flex-col  items-start justify-start space-y-3">
              <SectionBadge label="Complete Performance Data" />
              <SectionTitle
                className="max-w-3xl text-start!"
                title={<>Every number tells the same story.</>}
              />
            </div>

            {/* top cards */}
            <div className="grid lg:grid-cols-2 gap-5 mt-10">
              {/* main card */}
              <div className="lg:col-span-2 rounded-[32px] border border-[#2E2C76]/10 bg-[#F8F8FF] p-8 md:p-10 shadow-[0_10px_40px_rgba(46,44,118,0.06)]">
                <p className="subHeading text-[11px] uppercase tracking-[0.2em] text-[#2E2C76]">
                  Total Combined Views
                </p>

                <h3 className="heading text-5xl md:text-7xl text-[#2E2C76] mt-5">
                  1,27,404
                </h3>

                <p className="subHeading text-zinc-500 leading-7 mt-4">
                  Across carousel post (84,045) + reel (43,359) · Zero paid
                  promotion
                </p>

                {/* graph */}
                <div className="mt-10 space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="subHeading text-sm text-zinc-500">
                        Carousel Post
                      </span>

                      <span className="subHeading text-sm text-[#2E2C76] font-semibold">
                        84,045
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-[#E5E7FF] overflow-hidden">
                      <div className="h-full w-full rounded-full bg-[#2E2C76]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="subHeading text-sm text-zinc-500">
                        Reel Views
                      </span>

                      <span className="subHeading text-sm text-black font-semibold">
                        43,359
                      </span>
                    </div>

                    <div className="h-3 rounded-full bg-zinc-200 overflow-hidden">
                      <div className="h-full w-[52%] rounded-full bg-black" />
                    </div>
                  </div>
                </div>
              </div>

              {/* card */}
              <div className="rounded-[28px] border border-[#2E2C76]/10 bg-white p-8 shadow-sm">
                <p className="subHeading text-[11px] uppercase tracking-[0.2em] text-[#2E2C76]">
                  Total Shares
                </p>

                <h3 className="heading text-5xl text-[#2E2C76] mt-5">3,377</h3>

                <p className="subHeading text-zinc-500 leading-7 mt-4">
                  Post: 3,300 · Reel: 331 community spread drove ticket sales
                </p>

                <div className="mt-10 flex items-end gap-3 h-28">
                  <div className="flex-1 rounded-t-2xl bg-[#2E2C76] h-full" />
                  <div className="flex-1 rounded-t-2xl bg-black h-[18%]" />
                </div>
              </div>

              {/* card */}
              <div className="rounded-[28px] border border-[#2E2C76]/10 bg-[#F8F8FF] p-8 shadow-sm">
                <p className="subHeading text-[11px] uppercase tracking-[0.2em] text-[#2E2C76]">
                  Total Watch Time (Reel)
                </p>

                <h3 className="heading text-5xl text-black mt-5">7d 11h</h3>

                <p className="subHeading text-zinc-500 leading-7 mt-4">
                  7 days, 11 hours, 43 minutes, 27 seconds of real engagement
                </p>

                <div className="mt-10 flex items-end gap-3 h-28">
                  {[40, 70, 100, 80, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-[#2E2C76]/10 overflow-hidden flex items-end"
                    >
                      <div
                        className="w-full rounded-full bg-[#2E2C76]"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* mini card */}
              <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="subHeading text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  Non-Follower Reach (Post)
                </p>

                <h3 className="heading text-5xl text-black mt-5">91.2%</h3>

                <p className="subHeading text-zinc-500 leading-7 mt-4">
                  Cold audience reached purely through content relevance
                </p>

                <div className="mt-10 h-3 rounded-full bg-zinc-200 overflow-hidden">
                  <div className="h-full w-[91%] rounded-full bg-black" />
                </div>
              </div>

              {/* mini card */}
              <div className="rounded-[28px] border border-[#2E2C76]/10 bg-[#F8F8FF] p-8 shadow-sm">
                <p className="subHeading text-[11px] uppercase tracking-[0.2em] text-[#2E2C76]">
                  External Link Taps
                </p>

                <h3 className="heading text-5xl text-[#2E2C76] mt-5">154</h3>

                <p className="subHeading text-zinc-500 leading-7 mt-4">
                  Direct ticket intent people actively clicking to buy
                </p>

                <div className="mt-10 flex gap-2">
                  {[100, 80, 60, 40, 20].map((w, i) => (
                    <div
                      key={i}
                      className="h-3 rounded-full bg-[#2E2C76]"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* table */}
            <div className="mt-14 overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px]">
                  <thead className="bg-[#F8F8FF] border-b border-zinc-200">
                    <tr>
                      {[
                        "Content",
                        "Views",
                        "Likes",
                        "Comments",
                        "Shares",
                        "Reposts",
                        "Saves",
                        "Interactions",
                        "Profile Activity",
                      ].map((head, i) => (
                        <th
                          key={i}
                          className="px-6 py-5 text-left text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-medium"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      [
                        "Carousel Post",
                        "84,045",
                        "1,900+",
                        "62",
                        "3,300+",
                        "24",
                        "429",
                        "5,819",
                        "854",
                      ],
                      [
                        "Reel",
                        "43,359",
                        "1,500+",
                        "43",
                        "331",
                        "7",
                        "66",
                        "1,911",
                        "263",
                      ],
                      [
                        "TOTAL",
                        "1,27,404",
                        "3,400+",
                        "105",
                        "3,631",
                        "31",
                        "495",
                        "7,730",
                        "1,117",
                      ],
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-zinc-100 ${
                          i === 2 ? "bg-[#F8F8FF]" : "hover:bg-zinc-50"
                        } transition-all`}
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-6 py-5 text-sm ${
                              j === 0
                                ? "font-semibold text-black"
                                : "text-zinc-600"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* bottom cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {/* left */}
              <div className="rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="heading text-2xl text-black">
                    Engagement Breakdown
                  </h3>

                  <span className="subHeading text-xs uppercase tracking-[0.18em] text-[#2E2C76]">
                    Post
                  </span>
                </div>

                <div className="space-y-6">
                  {[
                    ["Shares", "3,377", "100%"],
                    ["Likes", "1,927", "57%"],
                    ["Saves", "429", "22%"],
                    ["Comments", "62", "10%"],
                    ["Reposts", "24", "5%"],
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-3">
                        <p className="subHeading text-zinc-500">{item[0]}</p>

                        <p className="subHeading font-semibold text-black">
                          {item[1]}
                        </p>
                      </div>

                      <div className="h-3 rounded-full bg-zinc-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#2E2C76]"
                          style={{ width: item[2] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* right */}
              <div className="rounded-[28px] border border-zinc-200 bg-[#F8F8FF] p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="heading text-2xl text-black">
                    Profile Activity
                  </h3>

                  <span className="subHeading text-xs uppercase tracking-[0.18em] text-[#2E2C76]">
                    Post
                  </span>
                </div>

                <div className="space-y-5">
                  {[
                    ["Total Profile Activity", "854"],
                    ["Profile Visits", "553"],
                    ["External Link Taps", "154"],
                    ["New Follows", "147"],
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-[#2E2C76]/10 pb-4 last:border-0"
                    >
                      <p className="subHeading text-zinc-500">{item[0]}</p>

                      <p className="subHeading font-semibold text-black">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-[60px] lg:mt-[100px]">
          <section className="relative py-24 ">
            <div className="flex flex-col  items-start justify-start space-y-3">
              <SectionBadge label="Audience Insights" />
              <SectionTitle
                className="max-w-3xl text-start!"
                title={<>Content that found the right people.</>}
              />
              <p className="text-zinc-400  text-base md:text-lg leading-6 subHeading max-w-3xl">
                91.2% of the carousel post&apos;s views came from accounts that
                didn&apos;t follow Shiv Cult pure cold reach through content
                relevance and community sharing.
              </p>
            </div>

            <div className="relative mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-2">
                <div className="grid grid-cols-1 items-center gap-3">
                  <div className="rounded- border border-[#2E2C76]/10 bg-[#F8F8FF] p-8 md:p-10 shadow-[0_10px_40px_rgba(46,44,118,0.05)]">
                    <p className="subHeading text-[11px] uppercase tracking-[0.22em] text-[#2E2C76] mb-10">
                      Carousel Post View Source Breakdown
                    </p>

                    <div className="space-y-8">
                      {/* non followers */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="subHeading text-zinc-600">
                            Non-Followers
                          </p>

                          <p className="subHeading font-semibold text-[#2E2C76]">
                            91.2%
                          </p>
                        </div>

                        <div className="h-3 rounded-full bg-[#E5E7FF] overflow-hidden">
                          <div className="h-full w-[91.2%] rounded-full bg-[#2E2C76]" />
                        </div>
                      </div>

                      {/* followers */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="subHeading text-zinc-600">Followers</p>

                          <p className="subHeading font-semibold text-black">
                            8.8%
                          </p>
                        </div>

                        <div className="h-3 rounded-full bg-zinc-200 overflow-hidden">
                          <div className="h-full w-[8.8%] rounded-full bg-black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2  overflow-hidden rounded-[] ">
                      {[
                        [
                          "Total Views",
                          "1.27L",
                          "Organic impressions across both formats",
                          "text-[#2E2C76]",
                          "bg-[#F8F8FF]",
                        ],
                        [
                          "Profile Visits",
                          "553",
                          "Viewers who wanted to know more",
                          "text-black",
                          "bg-white",
                        ],
                        [
                          "Link Taps",
                          "154",
                          "High-intent clicks to ticketing page",
                          "text-[#2E2C76]",
                          "bg-[#F8F8FF]",
                        ],
                        [
                          "Result",
                          "Sold Out",
                          "100% tickets sold · Zero ads",
                          "text-[#2E2C76]",
                          "bg-[#EEF1FF]",
                        ],
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`relative p-8 border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0 ${item[4]}`}
                        >
                          {i !== 3 && (
                            <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 text-zinc-300 text-3xl">
                              ›
                            </div>
                          )}

                          <p className="subHeading text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                            {item[0]}
                          </p>

                          <h3 className={`heading text-5xl mt-5 ${item[3]}`}>
                            {item[1]}
                          </h3>

                          <p className="subHeading text-zinc-500 leading-7 mt-4 max-w-[220px]">
                            {item[2]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className=" border border-zinc-200 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col  md:items-center md:justify-between gap-4 mb-12">
                    <p className="subHeading text-[11px] uppercase tracking-[0.22em] text-[#2E2C76]">
                      Engagement Comparison Post vs Reel
                    </p>

                    <p className="subHeading text-sm text-zinc-500">
                      All data sourced from Instagram Insights · Organic only
                    </p>
                  </div>

                  <div className="space-y-8">
                    {[
                      ["Post Views", "84,045", "100%", "#2E2C76"],
                      ["Reel Views", "43,359", "52%", "#000000"],
                      ["Post Shares", "3,377", "100%", "#2E2C76"],
                      ["Reel Shares", "331", "10%", "#000000"],
                      ["Post Interactions", "5,819", "100%", "#2E2C76"],
                      ["Reel Interactions", "1,911", "33%", "#000000"],
                      ["Link Taps (Post)", "154", "100%", "#2E2C76"],
                      ["New Follows (Post)", "147", "95%", "#000000"],
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[100px_1fr_40px] md:grid-cols-[120px_1fr_60px] items-center gap-2 xl:gap-4"
                      >
                        <p className="subHeading text-sm text-zinc-600">
                          {item[0]}
                        </p>

                        <div className="h-3 rounded-full bg-zinc-100 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: item[2],
                              background: item[3],
                            }}
                          />
                        </div>

                        <p
                          className="subHeading text-sm font-semibold text-right"
                          style={{ color: item[3] }}
                        >
                          {item[1]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* INSIGHTS */}
        <section className="mt-[60px] lg:mt-[100px]">
          <div className="flex flex-col  items-center justify-center space-y-3">
            <SectionBadge label="What the Data Proves" />
            <SectionTitle className="" title="Four lessons from a sold-out event." />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            {[
              {
                no: "01",
                title: "Shares are the most powerful organic metric",
                desc: "3,377 shares means 3,377 instances of one person deciding this content was worth sending to someone else. In the devotional community, that share is a personal endorsement far more powerful than any paid ad placement.",

                tag: "↑ 3,377 Total Shares · Zero Paid Spend",
              },
              {
                no: "02",
                title: "91.2% cold reach = perfect audience targeting",
                desc: "The fact that 91.2% of the post's viewers were non-followers proves the content reached entirely new people not just Shiv Cult's existing base. Algorithm distribution was earned, not bought. This is what audience-first content engineering achieves.",
                tag: "↑ 91.2% Non-Follower Reach via Content Alone",
              },
              {
                no: "03",
                title: "7+ days of watch time = genuine emotional pull",
                desc: "The reel accumulated over 7 days, 11 hours of total watch time. People weren't swiping past this. They were watching, rewatching, and feeling something. That emotional connection is what moves someone from passive viewer to paying attendee.",
                tag: "↑ 7d 11h 43m 27s Total Reel Watch Time",
              },
              {
                no: "04",
                title: "154 link taps = direct ticket intent",
                desc: "External link taps are the highest-intent metric in event marketing each one represents a person who saw the content, felt compelled to learn more or buy a ticket, and actively took action. 154 link taps from a single organic post is exceptional conversion performance.",
                tag: "↑ 154 Direct Ticket Intent Actions",
              },
            ].map((item, i) => (
              <div
                key={item.no}
                className="rounded-3xl border border-black/10 bg-white/[0.03] p-8"
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
        </section>
      </section>

      {/* STRATEGY */}
    </div>
  );
}
