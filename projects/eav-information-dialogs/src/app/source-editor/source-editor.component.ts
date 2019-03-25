import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-editor',
  templateUrl: './source-editor.component.html',
  styleUrls: ['./source-editor.component.css']
})
export class SourceEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert('todo');
  }
}
