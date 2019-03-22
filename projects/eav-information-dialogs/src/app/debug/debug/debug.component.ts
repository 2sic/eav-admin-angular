import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  localStorageArr: Array<any>;

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
    this.localStorageArr = this.state.getLocalStorageParams();
  }

}
