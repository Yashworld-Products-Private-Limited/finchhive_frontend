"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    title: "Starter Plan",
    monthly: 99,
    yearly: 999,
    features: [
      "Basic SEO Optimization",
      "Social Media Management (2 Platforms)",
      "Monthly Performance Reports",
      "Email Support",
    ],
  },
  {
    title: "Growth Plan",
    monthly: 249,
    yearly: 2499,
    best: true,
    features: [
      "Comprehensive SEO Strategy",
      "Social Media Management (3 Platforms)",
      "Content Creation (2 Blog Posts/Month)",
      "Monthly Analytics Review",
      "Priority Email and Phone Support",
    ],
  },
  {
    title: "Pro Plan",
    monthly: 499,
    yearly: 4999,
    features: [
      "Advanced SEO Optimization and Strategy",
      "Social Media Management (4 Platforms)",
      "Content Creation (4 Blog Posts per Month)",
      "Customized Marketing Campaigns",
      "Quarterly Strategy Sessions",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
  },
];

export default function PricingSection() {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="py-20 px-6 text-[#2E2C76]">
      {/* Toggle */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative flex rounded-full p-1 border border-[#2E2C76]/30 w-fit mx-auto">
          {/* 🔥 Sliding Background */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-[#2E2C76]"
            style={{
              left: planType === "monthly" ? "4px" : "calc(50% - 4px)",
            }}
          />

          {["monthly", "yearly"].map((type) => {
            const active = planType === type;

            return (
              <motion.button
                key={type}
                onClick={() => setPlanType(type as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  active ? "text-white" : "text-[#2E2C76]"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            );
          })}
        </div>

        <p className="mt-4 text-sm text-[#2E2C76]/70">
          Save 20% on yearly subscription
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {plans.map((item, i) => {
          const price = planType === "monthly" ? item.monthly : item.yearly;

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`flex flex-col justify-between relative rounded-3xl p-8 bg-[#2E2C76] text-white border border-white/20 ${
                item.best ? "border-white" : ""
              }`}
            >
              {item.best && (
                <span className="absolute top-4 right-4 bg-white text-[#2E2C76] text-xs px-3 py-1 rounded-full">
                  Best Value
                </span>
              )}

              {/* Title + Price */}
              <div>
                <h3 className="text-lg mb-4">{item.title}</h3>

                {/* 🔥 Animated Price */}
                <motion.div
                  key={price} // IMPORTANT for re-animation
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-bold mb-6"
                >
                  ${price}
                  <span className="text-base font-normal ml-2">
                    /{planType === "monthly" ? "month" : "year"}
                  </span>
                </motion.div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-sm text-white/80">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span><CircleCheck className="w-4 h-4" /> </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-full font-medium transition ${
                  item.best
                    ? "bg-white text-[#2E2C76]"
                    : "border border-white text-white hover:bg-white hover:text-[#2E2C76]"
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
