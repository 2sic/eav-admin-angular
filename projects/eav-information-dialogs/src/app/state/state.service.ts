import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const unknownId = 0;
const unknownDebug = false;
const unknownString = '';
const unknownVersion = '00.00.00';
const unknownType = 'dnn';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  //#region basic IDs
  appId = unknownId;
  zoneId = unknownId;
  pageId = unknownId;
  contentBlockId = unknownId;
  instanceId = unknownId;
  //#endregion

  //#region system / environment stuff
  debug = unknownDebug;
  sxcVersion = unknownString;
  sysVersion = unknownString;
  sysType = unknownString;
  //#endregion

  //#region features
  enableApp: boolean;
  enableCode: boolean;
  enableDesign: boolean;
  enableSuperUser = false; // not implemented yet
  //#endregion

  //#region paths for linking and api-access
  rootTenant = unknownString;
  rootWeb = unknownString;
  rootApp = unknownString;
  //#endregion

  //#region context
  partOfPage: boolean;
  //#endregion

  //#region languages
  languagePrimary = unknownString;
  languagesContent = unknownString;
  languagesUi = unknownString;
  //#endregion

  constructor() { }

  putUrlParamsInLocalStorage(paramsObj: any) {
    Object.keys(paramsObj).map((key, index) => {
      const value = paramsObj[key];
      localStorage.setItem(key, value);
    });

    this.transferToProperties();
    this.showLocalStorageParams();
  }

  transferToProperties() {
    // tslint:disable:radix
    //#region basic IDs
    this.appId = parseInt(this.getLocalStorageParamsByName('appId')) || unknownId;
    this.zoneId = parseInt(this.getLocalStorageParamsByName('zoneId')) || unknownId;
    this.instanceId = parseInt(this.getLocalStorageParamsByName('instanceId')) || unknownId;
    this.pageId = parseInt(this.getLocalStorageParamsByName('pageId')) || unknownId;
    this.contentBlockId = parseInt(this.getLocalStorageParamsByName('contentBlockId')) || unknownId;
    //#endregion

    //#region environment
    this.debug = this.getLocalStorageParamsByName('debug') === 'true';
    this.sxcVersion = this.getLocalStorageParamsByName('sxcver') || unknownVersion;
    this.sysVersion = this.getLocalStorageParamsByName('sysver') || unknownVersion;
    this.sysType = this.getLocalStorageParamsByName('systype') || unknownType;
    //#endregion

    //#region features
    this.enableApp = this.getLocalStorageParamsByName('fa') === 'true';
    this.enableCode = this.getLocalStorageParamsByName('fc') === 'true';
    this.enableDesign = this.getLocalStorageParamsByName('fd') === 'true';
    //#endregion

    //#region paths for linking and api-access
    this.rootTenant = this.getLocalStorageParamsByName('rtt') || unknownString;
    this.rootWeb = this.getLocalStorageParamsByName('rtw') || unknownString;
    this.rootApp = this.getLocalStorageParamsByName('rta') || unknownString;
    //#endregion

    //#region context
    this.partOfPage = this.getLocalStorageParamsByName('pop') === 'true';
    //#endregion

    //#region languages
    this.languagePrimary = this.getLocalStorageParamsByName('lp') || unknownString;
    this.languagesContent = this.getLocalStorageParamsByName('lc') || unknownString;
    this.languagesUi = this.getLocalStorageParamsByName('lui') || unknownString;
    //#endregion
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
