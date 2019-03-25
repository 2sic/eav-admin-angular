import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceEditorComponent } from './source-editor.component';
import { FilesComponent } from './files/files.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { SourceEditorRoutingModule } from './source-editor.routing.module';

@NgModule({
  declarations: [SourceEditorComponent, FilesComponent, CodeEditorComponent, SnippetsComponent],
  imports: [
    CommonModule,
    SourceEditorRoutingModule
  ]
})
export class SourceEditorModule { }
