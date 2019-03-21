import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from './state/state.service';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private state: StateService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      skip(1)
    ).subscribe(params => {
      this.state.putUrlParamsInLocalStorage(params);
    });

    this.state.showLocalStorageParams();
  }

  getLocalStorageParamsByName(name: string) {
    alert(this.state.getLocalStorageParamsByName(name));
  }
}
