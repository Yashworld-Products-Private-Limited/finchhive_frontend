'use client'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  route?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  route,
}) => {
  return (
    <div className="bg-[#FFFFFF]/5 border-2 border-white backdrop:blur-in-xs captlize text-black rounded-2xl shadow-md p-4 flex flex-col  justify-between hover:shadow-lg transition **w-[342px] h-[400px] max-w-[95vw] mx-auto**">
      <div>
        <div className="relative">
          <h3 className="text-[16px] md:text-[20px] font-medium mb-2 capitalize">
            {title}
          </h3>
          <button
            onClick={() => window.open(route, "_blank")}
            className="absolute top-0 right-1 bg-[#2E2C76] text-white rounded-full p-2 hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>
        <p className="text-[12px] md:text-[14px] text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="relative **w-[319px] h-[253px]**">
        <Image
          src={image}
          alt={title}
          width={319}
          height={213}
          className="rounded-xl object-center w-full h-[200px]"
        />
        
      </div>
    </div>
  );
};

export default ProjectCard;
