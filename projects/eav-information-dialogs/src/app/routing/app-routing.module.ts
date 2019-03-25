import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { SourceEditorComponent } from '../source-editor/source-editor.component';

const appRoutes: Routes = [
  {
    path: 'dialog',
    component: DialogComponent,
    loadChildren: '../dialog/dialog.module#DialogModule'
  },
  {
    path: 'source',
    component: SourceEditorComponent,
    loadChildren: '../source-editor/source-editor.module#SourceEditorModule'
  },
  { path: '', pathMatch: 'full', redirectTo: ''},
];

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
