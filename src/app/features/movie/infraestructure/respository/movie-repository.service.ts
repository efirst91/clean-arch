import {inject, Injectable} from '@angular/core';
import {MovieRepositoryInterface} from "../../domain/respositories/movie-repository.interface";
import {Observable, of} from "rxjs";
import {Data, Search} from "../../domain/models/data";
import {Movie} from "../../domain/models/movie.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_URL} from "../../../../core/tokens/custom-tokens";

@Injectable({
  providedIn: 'root'
})
export class MovieRepositoryService implements MovieRepositoryInterface {
  readonly httpClient = inject(HttpClient);
  readonly apiUrl = inject(API_URL);
  readonly url = `${this.apiUrl}3/search/movie`


  getAllMovies(param: Search): Observable<Data> {
    let params = new HttpParams();
    params = params.set('query', param.query);
    params = params.set('language', param.language ?? 'en-EN');
    params = params.set('page', param.page ?? 1);
    params = params.set('year', param.year ?? new Date().getFullYear());

    return this.httpClient.get<Data>(this.url, {params});
  }

  /**
   * This method will be implemented in the next version if I could
   * @param movieId the movie id
   * @todo
   */
  getMovieById(movieId: string): Observable<Movie | null> {
    return of(null);
  }
}
