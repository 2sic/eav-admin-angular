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
    // editor is an instance of Ace.Editor
    this.editor = editor;
    // editor.setReadOnly(false);
    // editor.setWrapMode(true);
    this.editor.setOptions({
      // mode: 'ace/mode/razor',
      // theme: 'ace/theme/sqlserver',
      // wrapMode: true,
      maxLines: 30
    });
  }
}
