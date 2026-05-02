import Link from "next/link";

interface Movie {
  id: number;
  imageUrl: string;
}

const MOCK_MOVIES: Movie[] = [
  { id: 1, imageUrl: "" },
  { id: 2, imageUrl: "" },
  { id: 3, imageUrl: "" },
  { id: 4, imageUrl: "" },
];

export default function Previews() {
  return (
    <section className="px-4 py-3">
      <h2 className="text-heading2 text-white mb-3 antialiased">Previews</h2>
      <div className="flex gap-x-3 overflow-x-auto scrollbar-hide">
        {MOCK_MOVIES.map((movie) => (
          <Link
            key={movie.id}
            href={`/detail/${movie.id}`}
            className="shrink-0"
          >
            <div className="w-25.5 h-25.5 rounded-full bg-zinc-700" />
          </Link>
        ))}
      </div>
    </section>
  );
}
