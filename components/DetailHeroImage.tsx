import Image from "next/image";
import type { MediaDetail } from "@/types/media";

type DetailHeroImageProps = {
  media: MediaDetail;
};

export default function DetailHeroImage({ media }: DetailHeroImageProps) {
  const title = media.title ?? media.name ?? "";

  if (!media.backdrop_path) {
    return <div className="w-full h-[415px] bg-neutral-900" />;
  }

  return (
    <div className="relative w-full h-[415px]">
      <Image
        src={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}
