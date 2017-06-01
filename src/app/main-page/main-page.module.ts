import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";

import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { MainRoutingModule } from "./main-routing.module";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    MainPageComponent,
    AdminPageComponent,
    PageThreeComponent,
    NavBarComponent,
    FooterComponent,
    InfoPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MainRoutingModule
  ],
  entryComponents: [
  ],
  providers: [],
})
export class MainPageModule { }
