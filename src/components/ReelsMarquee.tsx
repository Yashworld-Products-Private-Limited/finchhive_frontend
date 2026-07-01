"use client";

import { reels } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "./ui/marquee";

type Reel = (typeof reels)[number];

export const ReelCard = ({ item }: { item: Reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isTouch, setIsTouch] = useState(false);
  const [instanceId] = useState(() => Math.random().toString(36).substring(2, 9));
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        window.matchMedia("(pointer: coarse)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsTouch(hasTouch);
    };
    checkTouch();
  }, []);

  useEffect(() => {
    const handleOtherVideoPlay = (e: Event) => {
      const customEvent = e as CustomEvent<{ instanceId: string }>;
      if (customEvent.detail.instanceId !== instanceId) {
        setIsActive(false);
        setIsMuted(true);
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
      video.muted = isMuted;
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [shouldLoad, isActive, isMuted]);

  const startVideo = (unmute = false) => {
    setShouldLoad(true);
    setIsActive(true);
    if (unmute) {
      setIsMuted(false);
    }
    window.dispatchEvent(
      new CustomEvent("reel-play", { detail: { instanceId } })
    );
  };

  const stopVideo = () => {
    setIsActive(false);
    setIsMuted(true);
  };

  const handleCardClick = () => {
    // If already playing unmuted, click pauses it
    if (isActive && !isMuted) {
      stopVideo();
    } else {
      startVideo(true); // Play with audio
    }
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleCardClick();
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    // Hover triggers silent autoplay preview
    startVideo(false);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    // Only stop if video is playing in muted preview mode.
    // If the user clicked to play audio, keep it playing.
    if (isMuted) {
      stopVideo();
    }
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative mx-2 sm:mx-2.5 md:mx-3 block h-[380px] w-[240px] sm:h-[440px] sm:w-[280px] md:h-[500px] md:w-[320px] overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[24px] border-[4px] sm:border-[5px] md:border-[6px] border-white bg-black shadow-xl cursor-pointer select-none"
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          src={item.video}
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#121132] via-[#07070c] to-black flex flex-col items-center justify-center gap-3">
          <div className="relative w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2E2C76]/20 group-hover:border-[#2E2C76]/50 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white/40 group-hover:text-white/90 transition-colors"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold group-hover:text-white/60 transition-colors pl-[0.25em]">
            Hover to play
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />

      {/* Creator Profile & Name Bottom-Left
      <div className="pointer-events-none absolute bottom-4 left-4 z-20 flex items-center gap-3">
        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/30 shadow-md">
          <img
            src={item.profile}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-sm font-semibold text-white tracking-wide drop-shadow-md subHeading">
          {item.name}
        </span>
      </div> */}

      {/* Glassmorphic Play/Pause Button Bottom-Right */}
      <button
        type="button"
        onClick={handlePlayButtonClick}
        className="pointer-events-auto absolute bottom-3.5 right-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#2E2C76] hover:border-white/50 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        aria-label={isActive && !isMuted ? `Pause ${item.name} reel` : `Play ${item.name} reel`}
      >
        {isActive && !isMuted ? (
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
