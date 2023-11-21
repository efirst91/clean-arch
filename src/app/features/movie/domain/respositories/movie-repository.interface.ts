import {Observable} from "rxjs";
import {Data, Search} from "../models/data";
import {Movie} from "../models/movie.interface";

export interface MovieRepositoryInterface {
  getAllMovies(search: Search) : Observable<Data>;
  getMovieById(movieId: string): Observable<Movie | null>
}
