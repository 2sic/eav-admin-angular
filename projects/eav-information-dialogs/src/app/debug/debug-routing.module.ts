import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebugComponent } from './debug/debug.component';

const routes: Routes = [
  { path: 'state', component: DebugComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebugRoutingModule { }
