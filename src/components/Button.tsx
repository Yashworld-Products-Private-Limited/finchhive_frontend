"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  label: string;
  className?: string;
  icon?: boolean;
};

export default function PrimaryButton({
  href = "#",
  label,
  className = "",
  icon = true,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-10 2xl:gap-20 bg-[#2E2C76] text-white text-sm 2xl:text-lg leading-3.5 tracking-[1%] uppercase px-6 py-3 rounded-full relative overflow-hidden group transition-all duration-300 ease-out flex-shrink-0 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(46,44,118,0.4)] active:translate-y-0 active:scale-95 heading",
        className
      )}
    >
      <span className="relative z-10">{label}</span>

      {icon && (
        <ArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45" />
      )}

      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
    </Link>
  );
}