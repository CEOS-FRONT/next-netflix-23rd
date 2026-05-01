import MovieCard from "./MovieCard";

type MovieRowProps = {
  title: string;
  count?: number;
};

export default function MovieRow({ title, count = 10 }: MovieRowProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-heading2 text-white pl-4">{title}</h2>
      <div className="flex gap-[7px] overflow-x-auto pl-3 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {Array.from({ length: count }).map((_, i) => (
          <MovieCard key={i} />
        ))}
      </div>
    </section>
  );
}
