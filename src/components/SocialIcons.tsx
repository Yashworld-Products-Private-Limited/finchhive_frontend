"use client";

import { platforms } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            animate={{
              y: [0, -12, 0],
            }}
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            className={`absolute z-10 flex items-center justify-center
              w-[72px] h-[72px]
              sm:w-[90px] sm:h-[90px]
              md:w-[105px] md:h-[105px]
              rounded-[22px]
              ${item.bg}
              ${item.className}
              backdrop-blur-sm`}
          >
            <Image
              src={item.image}
              alt="platform"
              width={50}
              height={50}
              loading="lazy"
              className="w-[34px] h-[34px]
                sm:w-[42px] sm:h-[42px]
                md:w-[52px] md:h-[52px]
                object-contain"
            />
          </motion.div>
        ))}

        <div className="relative z-20 flex min-h-[420px] sm:min-h-[620px] items-center justify-center text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-[950px] leading-[1.2] tracking-[1px] text-[#2c2929]
            heading text-[24px] sm:text-[36px] md:text-[42px] lg:text-[58px]"
          >
            We Work Across All <br />
            <span className="text-[#2E2C76]">Major</span> Social Platforms.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default SocialIcons;
