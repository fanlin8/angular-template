import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';

import { MainPageModule } from "app/main-page/main-page.module";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { AuthService } from "app/services/auth.service";
import { AuthGuardService } from "app/services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    MainPageModule
  ],
  providers: [
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
