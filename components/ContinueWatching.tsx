import Link from "next/link";

interface Movie {
  id: number;
  progress: number;
}

const MOCK_MOVIES: Movie[] = [
  { id: 1, progress: 40 },
  { id: 2, progress: 70 },
  { id: 3, progress: 20 },
  { id: 4, progress: 55 },
];

export default function ContinueWatching() {
  return (
    <section className="px-4 py-3">
      <h2 className="text-heading2 text-white mb-3 antialiased">
        Continue Watching for Girim Nam
      </h2>
      <div className="flex gap-x-3 overflow-x-auto scrollbar-hide">
        {MOCK_MOVIES.map((movie) => (
          <Link
            key={movie.id}
            href={`/detail/${movie.id}`}
            className="shrink-0"
          >
            <div className="relative w-30 h-44 rounded-sm bg-zinc-700">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-600">
                <div
                  className="h-full bg-red-600"
                  style={{ width: `${movie.progress}%` }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
