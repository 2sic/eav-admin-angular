import { Component, OnInit } from '@angular/core';
import { StateService } from '../../state/state.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryRestComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit() {
  }

}
