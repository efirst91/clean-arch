import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError,throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // here we can do the error treatment according to http status error
      // example if is 404 r 200, if you don't catch the error here then it is passed to the
      // component, the error will be propagated using return  throwError(err);but if you don´t want
      // to propagate the error then return EMPTY
      console.log('Interceptor error', err);
      return throwError(err);
    })
  );
};
