import Image from "next/image";
import Link from "next/link";
import { getPosterUrl } from "@/lib/tmdb";
import type { Media } from "@/types/media";

type MovieCardProps = {
  media?: Media;
  large?: boolean;
};

export default function MovieCard({ media, large }: MovieCardProps) {
  const sizeClass = large
    ? "w-[154.04px] h-[251px]"
    : "w-[103px] h-[161px]";

  if (!media?.poster_path) {
    return <div className={`${sizeClass} rounded-[2px] bg-white shrink-0`} />;
  }

  const title = media.title ?? media.name ?? "";
  const imageSize = large ? "w342" : "w185";
  const mediaType = media.name ? "tv" : "movie";

  return (
    <Link href={`/detail/${media.id}?type=${mediaType}`}>
      <div className={`${sizeClass} rounded-[2px] overflow-hidden shrink-0 relative`}>
        <Image
          src={getPosterUrl(media.poster_path, imageSize)}
          alt={title}
          fill
          sizes={large ? "154px" : "103px"}
          className="object-cover"
        />
      </div>
    </Link>
  );
}

