import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `<ng-template><router-outlet></router-outlet></ng-template>`,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit  {
  @ViewChild(TemplateRef) ref;

  constructor(
    public dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {this.dialog.open(this.ref);}, 0);
  }

}
