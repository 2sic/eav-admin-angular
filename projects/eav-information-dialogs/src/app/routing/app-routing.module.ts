import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

const appRoutes: Routes = [
  { path: 'dialog', component: DialogComponent, loadChildren: '../dialog/dialog.module#DialogModule'},
  { path: '', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      enableTracing: false // <-- debugging purposes only
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
