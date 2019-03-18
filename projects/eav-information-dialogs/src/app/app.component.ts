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
  constructor(
    private state: StateService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.key)
    ).subscribe(params => {
      console.log(params);
      this.state.saveParams(params);
    });
  }
}
