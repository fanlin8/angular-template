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
    redirectUri: 'http://localhost:14200/main/admin',
    scope: 'openid'
  });

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {
  }

  login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.isLoggedIn = true;
      } else if (err) {
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.isLoggedIn = false;
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
