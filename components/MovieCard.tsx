import Image from "next/image";
import { getPosterUrl } from "@/lib/tmdb";
import type { Media } from "@/types/media";

type MovieCardProps = {
  media?: Media;
};

export default function MovieCard({ media }: MovieCardProps) {
  if (!media?.poster_path) {
    return <div className="w-[103px] h-[161px] rounded-[2px] bg-white shrink-0" />;
  }

  const title = media.title ?? media.name ?? "";

  return (
    <div className="w-[103px] h-[161px] rounded-[2px] overflow-hidden shrink-0 relative">
      <Image
        src={getPosterUrl(media.poster_path)}
        alt={title}
        fill
        sizes="103px"
        className="object-cover"
      />
    </div>
  );
}
