import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from './state/state.service';
import { skip } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private state: StateService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      skip(1)
    ).subscribe(params => {
      this.state.putUrlParamsInLocalStorage(params);
    });

    // setTimeout(() => {
    //   const dialogRef = this.dialog.open(DialogComponent, {
    //     width: '1190px'
    //   });

    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //   });
    // });
  }
}