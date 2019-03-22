import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  template: `<ng-template><router-outlet></router-outlet></ng-template>`,
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit  {
  @ViewChild(TemplateRef) ref;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      const dialogRef = this.dialog.open(this.ref);

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['.']);

        // 2dm event after closing dialog
      });
    });
  }

}
