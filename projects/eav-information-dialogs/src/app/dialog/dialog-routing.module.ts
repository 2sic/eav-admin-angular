import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'rest', loadChildren: '../rest/rest.module#RestModule'},
  { path: 'debug', loadChildren: '../debug/debug.module#DebugModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogRoutingModule { }
