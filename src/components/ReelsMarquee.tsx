"use client";

import { reels } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "./ui/marquee";

export const ReelCard = ({
  item,
}: {
  item: { name: string; video: string; thumbnail?: string };
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [instanceId] = useState(() =>
    Math.random().toString(36).substring(2, 9),
  );
  const [shouldLoad, setShouldLoad] = useState(false);

  const thumbnailUrl =
    item.thumbnail || item.video?.replace(/\.mp4$/i, ".jpg");

  useEffect(() => {
    const handleOtherVideoPlay = (e: Event) => {
      const customEvent = e as CustomEvent<{ instanceId: string }>;
      if (customEvent.detail.instanceId !== instanceId) {
        setIsActive(false);
      }
    };

    window.addEventListener("reel-play", handleOtherVideoPlay);
    return () => {
      window.removeEventListener("reel-play", handleOtherVideoPlay);
    };
  }, [instanceId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.muted = false;
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldLoad, isActive]);

  const startVideo = () => {
    setShouldLoad(true);
    setIsActive(true);
    window.dispatchEvent(
      new CustomEvent("reel-play", { detail: { instanceId } }),
    );
  };

  const stopVideo = () => {
    setIsActive(false);
  };

  const handleCardClick = () => {
    if (isActive) {
      stopVideo();
    } else {
      startVideo();
    }
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleCardClick();
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative mx-2 sm:mx-2.5 md:mx-3 block h-[380px] w-[240px] sm:h-[440px] sm:w-[280px] md:h-[500px] md:w-[320px] overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px] border-[4px] sm:border-[5px] md:border-[6px] border-white bg-black shadow-xl cursor-pointer select-none"
    >
      {/* Thumbnail image */}
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={item.name}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isActive ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      )}

      {/* Video element */}
      {shouldLoad && (
        <video
          ref={videoRef}
          src={item.video}
          poster={thumbnailUrl}
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />

      {/* Play/Pause button */}
      <button
        type="button"
        onClick={handlePlayButtonClick}
        className="pointer-events-auto absolute bottom-3.5 right-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#2E2C76] hover:border-white/50 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        aria-label={
          isActive ? `Pause ${item.name} reel` : `Play ${item.name} reel`
        }
      >
        {isActive ? (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4.5 w-4.5 text-white"
            aria-hidden="true"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4.5 w-4.5 text-white translate-x-[1px]"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
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
