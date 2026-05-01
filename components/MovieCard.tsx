import Image from "next/image";
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
        src={`https://image.tmdb.org/t/p/w185${media.poster_path}`}
        alt={title}
        fill
        sizes="103px"
        className="object-cover"
      />
    </div>
  );
}
