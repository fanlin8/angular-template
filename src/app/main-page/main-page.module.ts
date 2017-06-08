import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";

import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { MainRoutingModule } from "./main-routing.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdminPageModule } from "./admin-page/admin-page.module";
import { LoginPageModule } from "./login-page/login-page.module";

@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    MainPageComponent,
    PageThreeComponent,
    NavBarComponent,
    FooterComponent,
    InfoPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MainRoutingModule,
    LoginPageModule,
    AdminPageModule
  ],
  entryComponents: [
  ],
  providers: [],
})
export class MainPageModule { }
