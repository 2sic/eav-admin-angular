import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-item-rest',
  templateUrl: './item-rest.component.html',
  styleUrls: ['./item-rest.component.css']
})
export class ItemRestComponent implements OnInit {

  constructor(
    private state: StateService
  ) { 
    this.state.getLocalStorageParams();
  }

  ngOnInit() {
  }

}
