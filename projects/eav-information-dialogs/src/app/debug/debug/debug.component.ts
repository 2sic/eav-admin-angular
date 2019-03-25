import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
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
  ) {
    this.localStorageArr = this.state.getLocalStorageParams();
  }

  ngOnInit() {

  }
}
