import { FormsModule } from '@angular/forms';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceEditorComponent } from './source-editor.component';
import { FilesComponent } from './files/files.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { SourceEditorRoutingModule } from './source-editor.routing.module';
import { NgxAceModule, NGX_ACE_OPTIONS, INgxAceOptions } from '@nowzoo/ngx-ace';
// import { aceOptions } from './code-editor/ace-options';

const aceOptions: INgxAceOptions = {
  aceURL: '//cdnjs.cloudflare.com/ajax/libs/ace/1.4.3',
  defaultEditorOptions: {
    theme: 'ace/theme/sqlserver',
    showLineNumbers: true,
    useSoftTabs: true,
  }
};

@NgModule({
  declarations: [
    SourceEditorComponent,
    FilesComponent,
    CodeEditorComponent,
    SnippetsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SourceEditorRoutingModule,
    NgxAceModule.forRoot()

  ],
  providers: [
    { provide: NGX_ACE_OPTIONS, useValue: aceOptions }
  ]
})
export class SourceEditorModule { }
