import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      enableTracing: false // <-- debugging purposes only
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
