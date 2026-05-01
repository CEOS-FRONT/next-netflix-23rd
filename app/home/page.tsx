import BottomNav from "@/components/BottomNav";
import MovieRow from "@/components/MovieRow";

export default function HomePage() {
  return (
    <main>
      {/* 페어 영역: Hero, Previews, Continue Watching */}

      {/* 내 영역: Movie Rows */}
      <MovieRow title="Popular on Netflix" />

      <BottomNav />
    </main>
  );
}
