"use client";

import { motion } from "framer-motion";

interface SectionBadgeProps {
  label: string;
  className?: string;
}

const SectionBadge = ({ label, className = "" }: SectionBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.35,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#2E2C76]
        px-4
        py-1
        text-center
        text-xs
        font-semibold
        tracking-[1%]
        text-white
        subHeading
        lg:text-sm
        will-change-transform
        ${className}
      `}
    >
      {label}
    </motion.div>
  );
};

export default SectionBadge;
