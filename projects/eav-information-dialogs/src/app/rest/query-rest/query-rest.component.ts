import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';

@Component({
  selector: 'app-query-rest',
  templateUrl: './query-rest.component.html',
  styleUrls: ['./query-rest.component.css']
})
export class QueryRestComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

}
