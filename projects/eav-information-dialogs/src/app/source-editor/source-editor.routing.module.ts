import { SourceEditorComponent } from './source-editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'view/:viewId', component: SourceEditorComponent },
  { path: 'file/:fileName', component: SourceEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourceEditorRoutingModule { }
