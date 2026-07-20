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
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [instanceId] = useState(() =>
    Math.random().toString(36).substring(2, 9),
  );
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

  useEffect(() => {
    const video = document.createElement("video");

    video.src = item.video;
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    const handleLoaded = () => {
      video.currentTime = 1;
    };

    const handleSeeked = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(video, 0, 0);

      setThumbnail(canvas.toDataURL("image/jpeg", 0.9));
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [item.video]);

  const startVideo = (unmute = false) => {
    setShouldLoad(true);
    setIsActive(true);
    if (unmute) {
      setIsMuted(false);
    }
    window.dispatchEvent(
      new CustomEvent("reel-play", { detail: { instanceId } }),
    );
  };

  const stopVideo = () => {
    setIsActive(false);
    setIsMuted(true);
  };

  const handleCardClick = () => {
    if (isActive && !isMuted) {
      stopVideo();
    } else {
      startVideo(true);
    }
  };

  const handlePlayButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleCardClick();
  };

  const handleMouseEnter = () => {
    if (isTouch) return;

    startVideo(false);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;

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
        <>
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#121132] via-[#07070c] to-black flex items-center justify-center">
              Loading...
            </div>
          )}
        </>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />

      <button
        type="button"
        onClick={handlePlayButtonClick}
        className="pointer-events-auto absolute bottom-3.5 right-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#2E2C76] hover:border-white/50 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        aria-label={
          isActive && !isMuted
            ? `Pause ${item.name} reel`
            : `Play ${item.name} reel`
        }
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
