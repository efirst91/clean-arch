import {UseCaseBase} from "./base.usecase";
import {Data, Search} from "../domain/models/data";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {MovieRepositoryInterface} from "../domain/respositories/movie-repository.interface";

@Injectable()
export class GetAllUseCase implements UseCaseBase<Search, Data> {
  constructor(
    @Inject('MovieRepositoryInterface')
    private movieRepo: MovieRepositoryInterface
  ) {
  }

  execute(param: Search): Observable<Data> {
    return this.movieRepo.getAllMovies(param);
  }
}
