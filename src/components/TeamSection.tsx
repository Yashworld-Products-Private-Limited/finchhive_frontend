"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  tag: string;
  tagt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/imgs/team1.png",
    tag: "STRATEGIC",
    tagt: "Market Analyst",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/imgs/team2.png",
    tag: "CINEMATIC",
    tagt: "Cinematographer",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/imgs/team3.png",
    tag: "DYNAMIC",
    tagt: "Drone Expert",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/imgs/team1.png",
    tag: "VISIONARY",
    tagt: "Photographer",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/imgs/team2.png",
    tag: "ENGAGING",
    tagt: "Social Media Expert",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/imgs/team3.png",
    tag: "IMPACTFUL",
    tagt: "Graphic Designer",
  },
  {
    id: 7,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/imgs/team1.png",
    tag: "IMPACTFUL",
    tagt: "Graphic Designer",
  },
  {
    id: 8,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/imgs/team2.png",
    tag: "ADAPTIVE",
    tagt: "Digital Marketer",
  },
  
];
function TeamCard({ member }: { member: TeamMember }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative  w-full max-w-[500px] h-[620px] mx-auto">
      <div className="absolute top-3 left-3">
        <h2 className=" text-[28px] md:text-[36px] lg:text-[32px] xl:text-[42px] heading text-[#2E2C76] z-0 pointer-events-none">
          {member.tag}
        </h2>
      </div>
      <span className="absolute top-[55px] lg:top-[65px] left-[48%]  tracking-tight subHeading text-medium leading- text-[20px] md:text-[20px] xl:text-[24px] z-0 pointer-events-none">
        {member.tagt}
      </span>
      <div className="relative rounded-[32px] group overflow-hidden backdrop-blur-[0.5px] bg-transparant border border-white/10 shadow-2xl ">
        <div className="relative h-[440px] lg:h-[500px] flex items-end justify-center overflow-hidden">
          <div className="relative w-full h-[85%] z-10 flex items-end justify-center">
            <Image
              src={member.image}
              alt={member.name}
              fill
              loading="lazy"
              className={`object-contain transition-all duration-500 ${
                isActive ? "grayscale-0 scale-105" : "grayscale"
              }`}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />

          <div
            className={`absolute top-25 rotate-180 w-[160%] h-[160%] rounded-full transition-all duration-500
              bg-[radial-gradient(circle_at_center,_#2E2C76_0%,_#3f3ca0_40%,_transparent_70%)]
              [clipPath:polygon(0_50%,100%_50%,100%_100%,0_100%)]
              ${isActive ? "opacity-100 scale-100" : "opacity-10"}
              `}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
            <button
              onClick={() => setIsActive(!isActive)}
              className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#2E2C76] text-white rotate-270"
                            : "bg-white text-black rotate-0 translate-x-0"
                        }`}
            >
               {isActive ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </button>

            <div
              className={`flex items-center gap-3 overflow-hidden transition-all duration-500
                          ${
                            isActive
                              ? "max-w-[200px] opacity-100 translate-x-0"
                              : "max-w-0 opacity-0 translate-x-6"
                          }`}
            >
              {[FaLinkedinIn, FaFacebookF, FaTwitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-[#2E2C76] transition"
                >
                  <Icon className="text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="relative mt-2 rounded-2xl bg-white/20 backdrop-blur-[0.5] border border-white/10 py-5 text-center shadow-2xl">
        <h3 className="text-lg sm:text-[22px] md:text-[28px] heading text-[#2E2C76]">
          {member.name}
        </h3>
        <p className="text-gray-700 text-sm md:text-[16px] mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-3 2xl:gap-6 ">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}{" "}
      </div>
    </section>
  );
}
