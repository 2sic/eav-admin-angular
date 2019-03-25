import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  content = 'Hello World\n\nmoretext';
  editor: any;

  constructor() { }

  ngOnInit() {
  }

  onEditorReady(editor) {
    console.log('editor:', editor);
    // editor is an instance of Ace.Editor
    this.editor = editor;
    this.editor.setOptions({
      mode: 'ace/mode/razor',
      theme: 'ace/theme/sqlserver'
    });
  }
}
