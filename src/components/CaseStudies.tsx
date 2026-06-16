import { caseStudies } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-[120px]">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            onClick={() => router.push(item.link)}
            className={`relative space-y-5 cursor-none ${
              i === 0 || i === 2 ? "md:mt-[-80px]" : "md:mt-[0px]"
            }`}
          >
            <div className="card-image relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-transparent blur-3xl opacity-40" />
              <div className="relative rounded-2xl overflow-hidden h-[380px] sm:h-[420px] md:h-[460px] lg:h-[550px] shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                <Image
                  src={item.image}
                  alt="case study"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-[18px] bg-white/5 rounded-xl blur-md" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-[14px] bg-white/10 rounded-xl blur-sm" />
            </div>

            <div className="card-info relative rounded-[20px] p-5 sm:p-6 md:p-8 overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#eef5ff] border border-black/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] group transition-all duration-500 hover:scale-[1.02] space-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E2C76]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <span className="card-badge inline-block text-[10px] sm:text-xs tracking-wide px-3 py-1 rounded-full bg-[#2E2C76]/50 text-[#FFFFFF] ">
                CASE STUDY
              </span>
              <h3 className="card-title text-[#2E2C76] text-lg sm:text-xl md:text-2xl tracking-wide heading">
                {item.title}
              </h3>
              <p className="card-desc text-gray-500 text-xs sm:text-sm md:text-base  subHeading">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
