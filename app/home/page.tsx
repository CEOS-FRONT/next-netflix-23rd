import BottomNav from "@/components/BottomNav";
import MovieRow from "@/components/MovieRow";
import {
  fetchAfricanMovies,
  fetchNetflixOriginals,
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchTrendingDay,
  fetchTrendingWeek,
  fetchTVThrillers,
  fetchUSTVShows,
} from "@/lib/tmdb";

export default async function HomePage() {
  const [
    popular,
    trending,
    trendingDay,
    topRated,
    african,
    netflixOriginals,
    nowPlaying,
    tvThrillers,
    usTVShows,
  ] = await Promise.all([
    fetchPopular(),
    fetchTrendingWeek(),
    fetchTrendingDay(),
    fetchTopRated(),
    fetchAfricanMovies(),
    fetchNetflixOriginals(),
    fetchNowPlaying(),
    fetchTVThrillers(),
    fetchUSTVShows(),
  ]);

  return (
    <main className="pb-20">
      {/* 페어 영역: Hero, Previews, Continue Watching */}

      {/* 내 영역: Movie Rows */}
      <div className="flex flex-col gap-6">
        <MovieRow title="Continue Watching for Emenalo" medias={popular.results} />
        <MovieRow title="Popular on Netflix" medias={popular.results} />
        <MovieRow title="Trending Now" medias={trending.results} />
        <MovieRow title="Top 10 in Nigeria Today" medias={trendingDay.results.slice(0, 10)} />
        <MovieRow title="My List" medias={topRated.results} />
        <MovieRow title="African Movies" medias={african.results} />
        <MovieRow title="Nollywood Movies & TV" medias={african.results} />
        <MovieRow title="Netflix Originals" medias={netflixOriginals.results} />
        <MovieRow title="Watch it Again" medias={popular.results} />
        <MovieRow title="New Releases" medias={nowPlaying.results} />
        <MovieRow title="TV Thrillers & Mysteries" medias={tvThrillers.results} />
        <MovieRow title="US TV Shows" medias={usTVShows.results} />
      </div>

      <BottomNav />
    </main>
  );
}
