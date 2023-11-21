import {Observable} from "rxjs";

export interface UseCaseBase<I, O> {
  execute(param: I): Observable<O>;
}
