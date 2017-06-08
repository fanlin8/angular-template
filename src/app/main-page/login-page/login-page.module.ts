import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";
import { LoginPageComponent } from "./login-page.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    LoginRoutingModule
  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class LoginPageModule { }
