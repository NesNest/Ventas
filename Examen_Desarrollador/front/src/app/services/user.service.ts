import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLogged: boolean = false;

  setUserLogged(value: boolean): void {
    this.userLogged = value;
  }

  isUserLogged(): boolean {
    return this.userLogged;
  }
}
