import { Injectable } from '@angular/core';
import sha256 from 'crypto-js/sha256';
import { PASSWORD1, PASSWORD2, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null;
  redirectUrl: string;

  constructor() {  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(userName: string, password: string): boolean {
    const passwordAuth = sha256(password).toString();
    if (passwordAuth === PASSWORD1 || passwordAuth === PASSWORD2) {
      this.currentUser = {
        id: 1,
        userName,
        isAdmin: false
      };
      return true;
    }
    this.currentUser = null;
    return false;
  }

  logout(): void {
    this.currentUser = null;
  }
}
