"use client";

import { useState, useEffect } from "react";
import SearchCard from "@/components/SearchCard";
import BottomNav from "@/components/BottomNav";
import SearchHeader from "@/components/SearchHeader";
import { fetchTopSearches } from "./actions";
import type { Media } from "@/types/media";

export default function SearchPage() {
  const [topSearches, setTopSearches] = useState<Media[]>([]);
  const [results, setResults] = useState<Media[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTopSearches().then((data) => setTopSearches(data.results.slice(0, 10)));
  }, []);

  const handleResults = (results: Media[], loading: boolean) => {
    setResults(results);
    setIsLoading(loading);
  };

  const displayList = results.length > 0 ? results : topSearches;

  return (
    <main className="flex flex-col pb-20 pt-24">
      <SearchHeader onResults={handleResults} />
      <h2 className="text-heading1 text-white px-4 py-3.5">Top Searches</h2>
      <div className="flex flex-col gap-2">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <SearchCard key={i} skeleton />
            ))
          : displayList.map((media) => <SearchCard key={media.id} media={media} />)}
      </div>
      <BottomNav />
    </main>
  );
}
