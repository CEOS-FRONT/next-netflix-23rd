import type { TMDBListResponse } from "@/types/media";

const BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(endpoint: string): Promise<TMDBListResponse> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`TMDB API error: ${res.status}`);
  }

  return res.json();
}

// 영화
export const fetchPopular = () => tmdbFetch("/movie/popular");
export const fetchTopRated = () => tmdbFetch("/movie/top_rated");
export const fetchNowPlaying = () => tmdbFetch("/movie/now_playing");

// 트렌딩
export const fetchTrendingWeek = () => tmdbFetch("/trending/all/week");
export const fetchTrendingDay = () => tmdbFetch("/trending/all/day");

// TV 시리즈
export const fetchNetflixOriginals = () =>
  tmdbFetch("/discover/tv?with_networks=213");
export const fetchTVThrillers = () =>
  tmdbFetch("/discover/tv?with_genres=9648");
export const fetchUSTVShows = () =>
  tmdbFetch("/discover/tv?with_origin_country=US");

// 지역
export const fetchAfricanMovies = () =>
  tmdbFetch("/discover/movie?with_origin_country=NG");
