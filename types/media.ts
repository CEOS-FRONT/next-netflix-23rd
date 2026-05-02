export type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
};

export type TMDBListResponse = {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
};
