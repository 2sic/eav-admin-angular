import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';

@Component({
  // selector: 'app-item-rest',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class RestItemComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

}
