import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import auth0 from 'auth0-js';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  auth0 = new auth0.WebAuth({
    clientID: '_Yar3zsMuyes5htv43b6MLqThj9tukug',
    domain: 'angelix.auth0.com',
    responseType: 'token id_token',
    audience: 'https://angelix.auth0.com/userinfo',
    redirectUri: 'http://localhost:14200/callback',
    scope: 'openid'
  });

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
