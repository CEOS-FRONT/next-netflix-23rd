import Image from "next/image";
import { getPosterUrl } from "@/lib/tmdb";
import type { Media } from "@/types/media";

type HeroBannerProps = {
  media?: Media;
};

export default function HeroBanner({ media }: HeroBannerProps) {
  const title = media?.title ?? media?.name ?? "";

  return (
    <div className="relative h-103.75 w-full bg-zinc-800">
      {media?.poster_path && (
        <Image
          src={getPosterUrl(media.poster_path, "w780")}
          alt={title}
          fill
          sizes="375px"
          className="object-cover"
          priority
        />
      )}
      <Image
        src="/icons/icon-top10.svg"
        alt="TOP 10"
        width={15}
        height={15}
        className="absolute bottom-[4px] left-[117px] z-10"
      />
      <span className="absolute bottom-[2px] left-[138px] w-[123px] h-[20px] text-white text-center text-[13.723px] font-bold leading-5 tracking-[-0.041px] whitespace-nowrap z-10">
        #2 in Korea Today
      </span>
    </div>
  );
}
