import { AdminPageComponent } from './admin-page.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";
import { AdminBoardComponent } from "./admin-board/admin-board.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminBoardComponent,
    AdminProfileComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
    AdminRoutingModule
  ],
  entryComponents: [
  ],
  providers: [],
})
export class AdminPageModule { }
