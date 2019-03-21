import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const initParams = {
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

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //#region basic IDs
  appId = 0;
  zoneId = 0;
  pageId = 0;
  contentBlockId = 0;
  instanceId = 0;
  //#endregion

  //#region system / environment stuff
  debug: boolean;

  //#endregion

  //#region features
  enableApp: boolean;
  enableCode: boolean;
  enableDesign: boolean;
  enableSuperUser = false; // not implemented yet
  //#endregion


  constructor() { }

  putUrlParamsInLocalStorage(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      const value = paramsObj[key];

      if (typeof initParams[key] === 'undefined') {
        localStorage.setItem(key, value);
      } else {
        const name = initParams[key].name;
        localStorage.setItem(name, value);
      }
    });

    this.showLocalStorageParams();
  }

  checkForDefaultValues() {
    Object.keys(initParams).map(key => {
      const name = initParams[key].name;
      // const name = key;
      const value = initParams[key].default;

      if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, value);
      }
    });
  }

  getLocalStorageParamsByName(name: string) {
    if (localStorage.getItem(name) === null) {
      return '';
    }
    return localStorage.getItem(name);
  }

  // todo: 2ro move to a debug-module, and put this into a view;
  // important: never do DOM manipulations in angular
  showLocalStorageParams() {
    this.checkForDefaultValues();

    const node = document.getElementById('storage-value');
    node.innerHTML = '';
    Object.keys(localStorage).map((key, index) => {
      const e = document.createElement('div');
      e.innerHTML = `<li>${key}: ${localStorage.getItem(key)}</li>`;
      node.append(e);
    });
  }

  getKeyByValue(object: object, value: string) {
    return Object.keys(object).find(key => object[key].name === value);
  }
}
