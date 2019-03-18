import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StateService } from './state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'eav-information-dialogs';

  constructor(
    private state: StateService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams.test);

    // this.route.queryParams.pipe(
    //   filter(params => params.test)
    // ).subscribe(params => {
    //   console.log(params.test);
    // });
  }
}
