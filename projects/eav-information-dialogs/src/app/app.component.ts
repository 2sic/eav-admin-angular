import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from './state/state.service';
import { skip } from 'rxjs/operators';
// import { MatDialog } from '@angular/material/dialog';
import { DnnAppComponent, Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
extends DnnAppComponent
implements OnInit {
  constructor(
    private state: StateService,
    private route: ActivatedRoute,
    // public dialog: MatDialog,
    el: ElementRef,
    context: Context
  ) {
    super(el, context);
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      skip(1)
    ).subscribe(params => {
      this.state.putUrlParamsInLocalStorage(params);
    });
  }
}
