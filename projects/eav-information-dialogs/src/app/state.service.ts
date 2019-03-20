import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }

  private initParams = {
    sxcver: {
      name: 'sxcVersion',
      default: '00.00.00'
    },
    systype: {
      name: 'sysType',
      default: 'dnn'
    },
    sysver: {
      name: 'sysVersion',
      default: '00.00.00'
    },
    z: {
      name: 'zoneId',
      default: null
    },
    a: {
      name: 'appId',
      default: null
    },
    p: {
      name: 'pageId',
      default: null
    },
    i: {
      name: 'instanceId',
      default: null
    },
    c: {
      name: 'contentBlockId',
      default: null
    },
    d: {
      name: 'debug',
      default: false
    },
    lc: {
      name: 'languagesContent',
      default: []
    },
    lui: {
      name: 'languagesUi',
      default: []
    },
    lp: {
      name: 'languagePrimary',
      default: ''
    },
    rtt: {
      name: 'tenantRoot',
      default: ''
    },
    rtw: {
      name: 'websiteRoot',
      default: '/'
    },
    rta: {
      name: 'appRoot',
      default: ''
    },
    pop: {
      name: 'partOfPage',
      default: false
    },
    uid: {
      name: 'userIsDesigner',
      default: false
    },
    uic: {
      name: 'userIsCoder',
      default: false
    },
    uis: {
      name: 'userIsSuperuser',
      default: false
    }
  };

  saveParams(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      localStorage.setItem(this.initParams[key].name, paramsObj[key]);
    });
  }

  getLocalStorageParams() {
    console.log(localStorage);
    Object.keys(localStorage).map((key, index) => {
      //console.log(localStorage.getItem(key));
    });
  }
}
