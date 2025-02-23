import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  authenticateUser(data: RequestService): Observable<any> {
    // Aquí harías la llamada a tu backend para autenticar al usuario
    // Suponiendo que tu backend exponga un endpoint `/api/authenticate`
    return this.http.post('/api/authenticate', data);
  }

  setUserLogged(value: boolean) {
    this.isLoggedIn = value;
  }

  isUserLogged(): boolean {
    return this.isLoggedIn;
  }
}
