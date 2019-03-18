import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private paramSub = new BehaviorSubject<string>('');
  param: Observable<string> = this.paramSub.asObservable();

  constructor() { }

  saveParams(paramObj: any) {

    // localStorage.getItem(key);
    // localStorage.setItem(key, 'Value');
    console.log('save', paramObj);
    this.paramSub.next(paramObj);
  }
}
