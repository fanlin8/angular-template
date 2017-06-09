import { Component } from '@angular/core';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
