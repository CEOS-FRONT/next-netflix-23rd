"use server";

import { searchTMDB, fetchTrendingDay } from "@/lib/tmdb";

export async function searchAction(query: string) {
  return searchTMDB(query);
}

export async function fetchTopSearches() {
  return fetchTrendingDay();
}
