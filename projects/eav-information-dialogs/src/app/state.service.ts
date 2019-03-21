import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
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

  constructor() { }

  saveParams(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      const value = paramsObj[key];

      if (typeof this.initParams[key] === 'undefined') {
        localStorage.setItem(key, value);
      } else {
        const name = this.initParams[key].name;
        localStorage.setItem(name, value);
      }
    });

    this.getLocalStorageParams();
  }

  checkForDefaultValues() {
    Object.keys(this.initParams).map(key => {
      const name = this.initParams[key].name;
      // const name = key;
      const value = this.initParams[key].default;

      if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, value);
      }
    });
  }

  getLocalStorageParamsByName(name: string) {
    if(localStorage.getItem(name) === null){
      return '';
    }

    return localStorage.getItem(name);
  }

  getLocalStorageParams() {
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
