import { Injectable } from '@angular/core';

import { User } from '../user/user';

const baseUrl: string = 'http://localhost:49332'; 

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;

  isLoggedIn(): boolean {
    return this.loggedInUser != null;
  }

  setLoggedInUser(user: User): void {
    this.loggedInUser = user;
  }
  
  clearLoggedInUser(): void {
    this.loggedInUser = null;
  }

  getServerUrl(controller: string): string {
    return baseUrl + '/' + controller + '/';
  }

  constructor() { 
    console.log("System service init: server url is", baseUrl);
  }
}
