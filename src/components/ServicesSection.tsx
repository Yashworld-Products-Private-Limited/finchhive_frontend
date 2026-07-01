"use client";
import { useState } from "react";
import { servicesPage } from "@/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.610, 0.355, 1.000] as const,
    },
  },
};

interface ServiceCardProps {
  item: any;
}

const ServiceCard = ({ item }: ServiceCardProps) => {
  const router = useRouter();
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setClickRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setClickRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    // Delay navigation slightly so the tap scale and water wave can animate fully
    setTimeout(() => {
      router.push(item.link);
    }, 220);
  };

  const Icon = item.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
      whileTap={{ scale: 0.96 }}
      onClick={handleClick}
      className="service-card flex flex-col items-start justify-between group relative rounded-3xl p-3 lg:p-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 border border-blue-100 hover:border-blue-200 transition-all duration-300 space-y-2 lg:space-y-5 cursor-pointer overflow-hidden select-none"
    >
      {/* Click Water Ripple Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-0">
        {clickRipples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-[#2E2C76]/10 rounded-full animate-click-ripple -translate-x-1/2 -translate-y-1/2"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-start gap-3 w-full">
        <div className="flex items-center justify-center rounded-xl bg-[#2E2C76] p-4">
          <Icon className="text-white" size={24} />
        </div>

        <h3 className="text-gray-900 text-[22px] md:text-[24px] 2xl:text-[26px] heading">
          {item.title}
        </h3>
      </div>

      <p className="relative z-10 text-gray-600 text-sm lg:text-base subHeading leading-normal">
        {item.desc}
      </p>

      <Link
        href={item.link}
        aria-label={`Learn more about ${item.title}`}
        className="relative z-10 flex items-center gap-3 text-gray-900 text-xs uppercase"
      >
        <span className="subHeading">Learn More</span>

        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-blue-400 transition-colors duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div>
      <style>{`
        @keyframes click-ripple-effect {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.8;
          }
          100% {
            width: 800px;
            height: 800px;
            opacity: 0;
          }
        }
        .animate-click-ripple {
          animation: click-ripple-effect 0.6s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
      `}</style>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 lg:gap-6 mt-8"
      >
        {servicesPage.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;