import {MovieBase} from "./movie.interface";

export interface Data {
  page:          number;
  results:       MovieBase[];
  total_pages:   number;
  total_results: number;
}

export interface Search {
  query: string;
  language?: string;
  page?: number;
  year?: number;
}
