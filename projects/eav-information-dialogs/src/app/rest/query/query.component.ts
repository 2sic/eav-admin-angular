import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';

@Component({
  // selector: 'app-rest-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class RestQueryComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

}
