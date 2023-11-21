import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setLang(language: string): void {
    localStorage.setItem('lang', language);
  }

  getLang(): string | null {
    return localStorage.getItem('lang');
  }
}
