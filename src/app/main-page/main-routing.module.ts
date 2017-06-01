import { AdminPageComponent } from './admin-page/admin-page.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageOneComponent } from './page-one/page-one.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InfoPageComponent } from "app/main-page/info-page/info-page.component";
import { MainPageComponent } from "app/main-page/main-page.component";

const mainRoutes: Routes = [
  {
    path: '', component: MainPageComponent,
    children: [
      { path: '', component: InfoPageComponent },
      { path: 'page-one', component: PageOneComponent },
      { path: 'page-two', component: PageTwoComponent },
      { path: 'page-three', component: PageThreeComponent },

      { path: 'admin', component: AdminPageComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class MainRoutingModule { }
