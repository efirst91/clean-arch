import {ApplicationConfig, ErrorHandler} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {GlobalErrorHandlerService} from "./core/errors/global-error-handler.service";
import {errorInterceptor} from "./core/interceptors/error/error.interceptor";
import {API_URL, IMG_URL} from "./core/tokens/custom-tokens";
import {environment} from "../environments/environment";
import {MovieRepositoryService} from "./features/movie/infraestructure/respository/movie-repository.service";
import {headerInterceptor} from "./core/interceptors/header/header.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: IMG_URL,
      useValue: environment.imageBaseUrl
    },
    {
      provide: API_URL,
      useValue: environment.proxyApiBase
    },
    {
      provide: 'MovieRepositoryInterface',
      useClass: MovieRepositoryService
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: headerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: errorInterceptor,
      multi: true
    }
  ]
};
