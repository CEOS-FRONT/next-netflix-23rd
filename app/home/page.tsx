import BannerButtons from "@/components/BannerButtons";
import BottomNav from "@/components/BottomNav";
import HeroBanner from "@/components/HeroBanner";
import HomeHeader from "@/components/HomeHeader";
import MovieRow from "@/components/MovieRow";
import Previews from "@/components/Previews";
import {
  fetchAfricanMovies,
  fetchKoreaTopMovies,
  fetchNetflixOriginals,
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchTrendingWeek,
  fetchTVThrillers,
  fetchUSTVShows,
} from "@/lib/tmdb";

export default async function HomePage() {
  const [
    popular,
    trending,
    koreaTop,
    topRated,
    african,
    netflixOriginals,
    nowPlaying,
    tvThrillers,
    usTVShows,
  ] = await Promise.all([
    fetchPopular(),
    fetchTrendingWeek(),
    fetchKoreaTopMovies(),
    fetchTopRated(),
    fetchAfricanMovies(),
    fetchNetflixOriginals(),
    fetchNowPlaying(),
    fetchTVThrillers(),
    fetchUSTVShows(),
  ]);

  return (
    <main className="pb-20">
      {/* 페어 영역 */}
      <HomeHeader />
      <HeroBanner medias={koreaTop.results.slice(0, 10)} />
      <BannerButtons />
      <Previews medias={trending.results.slice(0, 10)} />

      {/* 내 영역: Movie Rows */}
      <div className="flex flex-col gap-6">
        <MovieRow title="Continue Watching for Emenalo" medias={popular.results} />
        <MovieRow title="Popular on Netflix" medias={popular.results} />
        <MovieRow title="Trending Now" medias={trending.results} />
        <MovieRow title="Top 10 in Korea Today" medias={koreaTop.results.slice(0, 10)} />
        <MovieRow title="My List" medias={topRated.results} />
        <MovieRow title="African Movies" medias={african.results} />
        <MovieRow title="Nollywood Movies & TV" medias={african.results} />
        <MovieRow title="Netflix Originals" medias={netflixOriginals.results} large />
        <MovieRow title="Watch it Again" medias={popular.results} />
        <MovieRow title="New Releases" medias={nowPlaying.results} />
        <MovieRow title="TV Thrillers & Mysteries" medias={tvThrillers.results} />
        <MovieRow title="US TV Shows" medias={usTVShows.results} />
      </div>

      <BottomNav />
    </main>
  );
}
