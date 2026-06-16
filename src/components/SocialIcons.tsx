"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { platforms } from "@/constants";

const SocialIcons = () => {
  return (
    <section className="">
      <div className="container mx-auto px-5">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading text-[28px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-tight text-[#2c2929]">
            We Work Across All <br />
            <span className="text-[#2E2C76]">Major</span> Social Platforms.
          </h2>
        </motion.div>

        {/* Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10">
          {platforms.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
                y: -8,
              }}
              className={`flex items-center justify-center
              w-[80px] h-[80px]
              sm:w-[100px] sm:h-[100px]
              md:w-[120px] md:h-[120px]
              rounded-3xl shadow-xl ${item.bg}`}
            >
              <Image
                src={item.image}
                alt="platform"
                width={60}
                height={60}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;