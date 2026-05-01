import MovieCard from "./MovieCard";
import type { Media } from "@/types/media";

type MovieRowProps = {
  title: string;
  medias?: Media[];
  large?: boolean;
};

export default function MovieRow({ title, medias, large }: MovieRowProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-heading2 text-white pl-4">{title}</h2>
      <div className="flex gap-[7px] overflow-x-auto pl-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {medias?.map((media) => (
          <MovieCard key={media.id} media={media} large={large} />
        ))}
      </div>
    </section>
  );
}
