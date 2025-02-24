import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoggedSubject = new BehaviorSubject<boolean>(false);
  userLogged$ = this.userLoggedSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {  
      const storedUser = localStorage.getItem('username');
      if (storedUser) {
        this.userLoggedSubject.next(false);
      }
    }
  }

  setUserLogged(value: boolean, username?: string) {
    if (typeof window !== 'undefined') { 
      if (value && username) {
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('username');
      }
    }
    this.userLoggedSubject.next(value);
  }

  isUserLogged(): boolean {
    return this.userLoggedSubject.value;
  }
}
