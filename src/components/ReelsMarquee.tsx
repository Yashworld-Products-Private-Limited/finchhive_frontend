"use client";

import { reels } from "@/constants";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { Marquee } from "./ui/marquee";

type Reel = (typeof reels)[number];

export const ReelCard = ({ item }: { item: Reel }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [instanceId] = useState(() => Math.random().toString(36).substring(2, 9));

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
      }
    };

    window.addEventListener("reel-play", handleOtherVideoPlay);
    return () => {
      window.removeEventListener("reel-play", handleOtherVideoPlay);
    };
  }, [instanceId]);

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
    window.dispatchEvent(
      new CustomEvent("reel-play", { detail: { instanceId } })
    );
  };

  const stopVideo = () => {
    setIsActive(false);
  };

  const handleTogglePlay = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (isActive) {
      stopVideo();
    } else {
      startVideo();
    }
  };

  return (
    <div
      rel="noreferrer"
      aria-label={`Watch ${item.name} on Instagram`}
      onMouseEnter={isTouch ? undefined : startVideo}
      onMouseLeave={isTouch ? undefined : stopVideo}
      onFocus={isTouch ? undefined : startVideo}
      onBlur={isTouch ? undefined : stopVideo}
      className="group relative mx-3 block h-[500px] w-[320px] overflow-hidden rounded-[24px] border-[6px] border-white bg-black shadow-xl"
    >
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          src={item.video}
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
          onClick={handleTogglePlay}
          className={`pointer-events-auto rounded-full border border-white/40 bg-white px-4 py-3 text-black transition-opacity duration-200 ${
            isTouch
              ? "opacity-100"
              : isActive
              ? "opacity-0 pointer-events-none"
              : "opacity-100 md:opacity-0 group-hover:opacity-100"
          }`}
          aria-label={isActive ? `Pause ${item.name} reel` : `Play ${item.name} reel`}
        >
          <span className="flex items-center gap-2 text-sm font-medium">
            {isActive ? (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </span>
        </button>
      </div>
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
