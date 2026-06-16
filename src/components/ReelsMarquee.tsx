"use client";

import { reels } from "@/constants";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { Marquee } from "./ui/marquee";
import Link from "next/link";

type Reel = (typeof reels)[number];

export const ReelCard = ({ item }: { item: Reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    if (isActive) {
      videoRef.current?.play().catch(() => undefined);
      return;
    }

    videoRef.current?.pause();
  }, [isActive, shouldLoadVideo]);

  const startVideo = () => {
    setShouldLoadVideo(true);
    setIsActive(true);
  };

  const stopVideo = () => {
    setIsActive(false);
  };

  const handlePlayButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    startVideo();
  };

  return (
    <Link
      href={item.instagram}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch ${item.name} on Instagram`}
      onMouseEnter={startVideo}
      onMouseLeave={stopVideo}
      onFocus={startVideo}
      onBlur={stopVideo}
      className="group relative mx-3 block h-[500px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white bg-black shadow-xl"
    >
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={handlePlayButtonClick}
          className={`pointer-events-auto rounded-full border border-white/40 bg-white px-4 py-3 text-black transition-opacity duration-200 ${
            isActive ? "opacity-0 pointer-events-none" : "opacity-100 md:opacity-0 group-hover:opacity-100"
          }`}
          aria-label={`Play ${item.name} reel`}
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </span>
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-3">
        <Image
          src={item.profile}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border border-white object-cover"
        />

        <div className="flex items-center gap-1">
          <span className="text-lg font-medium text-white">{item.name}</span>
          <BadgeCheck className="h-4 w-4 fill-[#3B82F6] text-[#3B82F6]" />
        </div>
      </div>
    </Link>
  );
};

const ReelsMarquee = () => {
  return (
    <Marquee
      pauseOnHover
      className="relative flex items-center justify-center gap-6"
    >
      {reels.map((item) => (
        <ReelCard key={item.video} item={item} />
      ))}
    </Marquee>
  );
};

export default ReelsMarquee;
