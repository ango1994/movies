import { Movie } from './movie';

export interface Search {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
