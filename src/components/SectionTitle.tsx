"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionTitleProps {
  title: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.4,
      }}
      className={`
        heading
        text-center
        uppercase
        tracking-[1%]
        text-[#2E2C76]
        text-[32px]
        leading-[42px]
        md:leading-[50px]
        lg:text-[52px]
        lg:leading-[64px]
        will-change-transform
        ${className}
      `}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
