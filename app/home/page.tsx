import BottomNav from "@/components/BottomNav";
import MovieRow from "@/components/MovieRow";

export default function HomePage() {
  return (
    <main className="pb-20">
      {/* 페어 영역: Hero, Previews, Continue Watching */}

      {/* 내 영역: Movie Rows */}
      <div className="flex flex-col gap-6">
        <MovieRow title="Popular on Netflix" />
        <MovieRow title="Trending Now" />
        <MovieRow title="Top 10 in Nigeria Today" />
        <MovieRow title="My List" />
        <MovieRow title="African Movies" />
        <MovieRow title="Nollywood Movies & TV" />
        <MovieRow title="Netflix Originals" />
        <MovieRow title="Watch it Again" />
        <MovieRow title="New Releases" />
        <MovieRow title="TV Thrillers & Mysteries" />
        <MovieRow title="US TV Shows" />
      </div>

      <BottomNav />
    </main>
  );
}
