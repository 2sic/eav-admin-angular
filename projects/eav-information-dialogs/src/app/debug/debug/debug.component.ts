import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  localStorageArr: Array<any>;

  constructor(
    private state: StateService,
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      setTimeout(() => this.localStorageArr = this.state.getLocalStorageParams());
    });
  }
}
