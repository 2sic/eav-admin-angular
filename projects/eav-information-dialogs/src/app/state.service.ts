import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }

  saveParams(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      localStorage.setItem(key, paramsObj[key]);
    });
  }

  getLocalStorageParams() {
    Object.keys(localStorage).map((key, index) => {
      console.log(localStorage.getItem(key));
    });
  }
}
