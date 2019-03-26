import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxAceService } from '@nowzoo/ngx-ace';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('ace') ace;
  content = `@using System.Linq;
@using Dynlist = System.Collections.Generic.IEnumerable<dynamic>;

@{
  var persons = AsDynamic(App.Data["Persons"]);
  var books = AsDynamic(App.Data["Books"]);
}

@RenderPage("_header.cshtml")

<h2>Accessing Authors, a List inside of Books</h2>

<h3>Basic Use of List book.Authors</h3>
<p>This example shows the books, and we want to LINQ on the Authors. We must tell the compiler it's a list, so that LINQ can use <code>Select(...)</code>.</p>
<ol>
  @foreach(var book in books) {
    // To work with a list coming off a dynamic object, we have to tell the compiler it's a dynamic list
    var authors = (book.Authors as Dynlist)
      .Select(a => a.FirstName + " " + a.LastName);

    <li><strong>@book.Title</strong>
      by @string.Join(", ", authors.OrderBy(ln => ln))
    </li>
  }
</ol>

<hr>
<h3>OrderBy Amount of Authors</h3>
<p>This example shows Z-A ordering, where we count the authors to sort.</p>
<ol>
  @foreach(var book in books.OrderByDescending(p => p.Authors.Count)) {
    var authors = (book.Authors as Dynlist).Select(a => a.FirstName + " " + a.LastName);
    <li><strong>@book.Title</strong>
      by @string.Join(",", authors.OrderBy(ln => ln)) (@book.Authors.Count author)
    </li>
  }
</ol>

<!-- unimportant stuff, hidden -->`;
  editor: any;

  constructor(private aceService: NgxAceService) { }

  ngOnInit() {
    console.log('ace', this.ace);

    this.aceService.loaded().then(() => {
      console.log('win.ace', (window as any).ace);
      const editor = (window as any).ace.edit(this.ace.nativeElement, {
        wrap: true,
        maxLines: 30
      });
      editor.setTheme('ace/theme/sqlserver');
      editor.session.setMode('ace/mode/razor');
    });
  }

  enter() {
    const textEditor = this.editor.firstChild();
    console.log('te', textEditor);
    this.editor.type('{enter}').trigger('input');
  }

  onEditorReady(editor) {
    // editor is an instance of Ace.Editor
    this.editor = editor;
    console.log(editor);
    // editor.setReadOnly(false);
    // editor.setWrapMode(true);
    this.editor.setOptions({
      mode: 'ace/mode/razor',
      theme: 'ace/theme/sqlserver',
      // wrapMode: true,
      maxLines: 30
    });
  }
}
