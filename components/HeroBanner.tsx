"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPosterUrl } from "@/lib/tmdb";
import type { Media } from "@/types/media";
import Top10Icon from "@/components/icons/Top10Icon";

type HeroBannerProps = {
  medias?: Media[];
};

export default function HeroBanner({ medias = [] }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (medias.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % medias.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [medias.length]);

  const media = medias[currentIndex];
  if (!media) return <div className="relative h-103.75 w-full bg-zinc-800" />;

  const title = media.title ?? media.name ?? "";

  return (
    <div className="relative h-103.75 w-full bg-zinc-800">
      {media.poster_path && (
        <Image
          src={getPosterUrl(media.poster_path, "w780")}
          alt={title}
          fill
          sizes="375px"
          className="object-cover"
          priority
        />
      )}
      {/* 피그마 스펙 그라데이션 오버레이 */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 50%, #000 100%)"
        }}
      />
      <Top10Icon 
        width={15} 
        height={15} 
        className="absolute bottom-1 left-29.25 z-10" 
      />
      <span className="absolute bottom-0.5 left-34.5 h-5 text-white text-center text-[13.723px] font-bold leading-5 tracking-[-0.041px] whitespace-nowrap z-10">
        #{currentIndex + 1} in Korea Today
      </span>
    </div>
  );
}
