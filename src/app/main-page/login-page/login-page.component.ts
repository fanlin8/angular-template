import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isAuthenticated() ? 'in' : 'out');
  }

  login() {
    this.authService.login()
  }

}
