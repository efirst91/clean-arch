import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError,throwError} from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      debugger
      console.log('Error del interceptor ', err);
      debugger
      return throwError(err);
    })
  );
};
