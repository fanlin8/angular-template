import { AdminPageComponent } from './admin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminBoardComponent } from "./admin-board/admin-board.component";
import { AdminProfileComponent } from "./admin-profile/admin-profile.component";
import { AuthGuardService } from "app/services/auth/auth-guard.service";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: 'board', component: AdminBoardComponent },
      { path: 'profile', component: AdminProfileComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AdminRoutingModule { }
