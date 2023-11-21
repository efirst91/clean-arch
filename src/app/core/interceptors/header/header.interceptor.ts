import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {LocalStorageService} from "../../../shared/services/local-storage/local-storage.service";

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
 console.log('interceptor del header')
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getToken() ?? '';
  const lang = localStorageService.getLang() ?? 'en-EN';

  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      lang: lang
    }
  })
  return next(cloneReq);
};
