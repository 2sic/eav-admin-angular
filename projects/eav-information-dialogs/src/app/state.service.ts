import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private initParams = {
    sxcver: {
      name: 'sxcVersion',
      default: '00.00.00',
      type: 'string'
    },
    systype: {
      name: 'sysType',
      default: 'dnn',
      type: 'string'
    },
    sysver: {
      name: 'sysVersion',
      default: '00.00.00',
      type: 'string'
    },
    z: {
      name: 'zoneId',
      default: null,
      type: 'number'
    },
    a: {
      name: 'appId',
      default: null,
      type: 'number'
    },
    p: {
      name: 'pageId',
      default: null,
      type: 'number'
    },
    i: {
      name: 'instanceId',
      default: null,
      type: 'number'
    },
    c: {
      name: 'contentBlockId',
      default: null,
      type: 'number'
    },
    d: {
      name: 'debug',
      default: false,
      type: 'boolean'
    },
    lc: {
      name: 'languagesContent',
      default: [],
      type: 'array'
    },
    lui: {
      name: 'languagesUi',
      default: [],
      type: 'array'
    },
    lp: {
      name: 'languagePrimary',
      default: '',
      type: 'string'
    },
    rtt: {
      name: 'tenantRoot',
      default: '',
      type: 'string'
    },
    rtw: {
      name: 'websiteRoot',
      default: '/',
      type: 'string'
    },
    rta: {
      name: 'appRoot',
      default: '',
      type: 'string'
    },
    pop: {
      name: 'partOfPage',
      default: false,
      type: 'boolean'
    },
    uid: {
      name: 'userIsDesigner',
      default: false,
      type: 'boolean'
    },
    uic: {
      name: 'userIsCoder',
      default: false,
      type: 'boolean'
    },
    uis: {
      name: 'userIsSuperuser',
      default: false,
      type: 'boolean'
    }
  };

  constructor() {
    this.checkForDefaultValues();
  }

  saveParams(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      const name = this.initParams[key].name
      const type = this.initParams[key].type;
      let value = paramsObj[key];

      if(type === 'array'){
        value = JSON.stringify(value);
      }

      if(type === 'boolean'){
        value = JSON.stringify(value);
      }

      localStorage.setItem(name, value);
    });
  }

  checkForDefaultValues() {
    Object.keys(this.initParams).map(key => {
      const name = this.initParams[key].name;
      const type = this.initParams[key].type;
      let value = this.initParams[key].default;

      if(type === 'array'){
        value = JSON.stringify(value);
      }

      if(type === 'boolean'){
        value = JSON.stringify(value);
      }

      if(localStorage.getItem(name) === null) {
        localStorage.setItem(name, value);
      }
    })
  }

  getLocalStorageParams() { 
    const node = document.getElementById('storage-value');
    node.innerHTML = '';
    
    Object.keys(localStorage).map((key, index) => {
      const objKey = this.getKeyByValue(this.initParams, key);
      const type = this.initParams[objKey].type;

      const e = document.createElement('div');
      e.innerHTML = `<li>${key}: ${localStorage.getItem(key)}</li>`;      
      node.append(e);
      // switch(type) { 
      //   case 'array': { 
      //     console.log(typeof JSON.parse(localStorage.getItem(key)));
      //     break; 
      //   } 
      //   case 'number': { 
      //     console.log(typeof parseInt(localStorage.getItem(key)));
      //     break; 
      //   } 
      //   case 'boolean': { 
      //     console.log(typeof JSON.parse(localStorage.getItem(key)));
      //     break; 
      //   } 
      //   default: { 
      //     console.log(typeof localStorage.getItem(key));
      //     break; 
      //   } 
      // }             
    });

    console.log(localStorage);
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key].name === value);
  }
}
