import { AccessScenarios } from './../access-scenarios';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, take, tap, flatMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { StateService } from '../../state/state.service';
import { Environments } from '../environments';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

const pathToContent = 'app/{appname}/content/{typename}';

@Component({
  selector: 'app-content-type-rest',
  templateUrl: './content-type-rest.component.html',
  styleUrls: ['./content-type-rest.component.css']
})
export class ContentTypeRestComponent implements OnInit {
  /** name of the type to show REST infos about */
  typeName$: Observable<string>;

  /** list of all known environments */
  environments = Environments;

  /** list of all known scenarios */
  scenarios = AccessScenarios;

  /** currently selected environment-key, needed for calculating correct urls */
  envKey = new BehaviorSubject<string>(Environments[0].key);

  /** currently selected environment object */
  currentEnv = this.envKey.pipe(map(s => Environments.find(e => e.key === s)));

  scenario = new BehaviorSubject<string>(AccessScenarios[0].key);
  currentScenario = this.scenario.pipe(map(s => AccessScenarios.find(as => as.key === s)));

  /** true if we're showing the short-url */
  // virtualUrl = new BehaviorSubject<boolean>(true);

  /** The root path for the current request */
  root$: Observable<string>;

  /** show help text for the environment dropdown */
  showEnvHelp = false;

  /** show help text for the access-type dropdown */
  showAccessHelp = false;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.wireUpObservables();
  }

  /** setup all observables */
  wireUpObservables() {
    // type name
    this.typeName$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return params.get('name');
      })
    );

    // extract real app-name from the app-path and provide it in the named-root
    const appPath = this.state.rootApp || '/put-app-name-here/';
    const appName = appPath.substring(
      appPath.lastIndexOf('/') + 1,
      appPath.length
    );

    this.root$ = combineLatest(
      this.typeName$,
      this.envKey.asObservable(),
      this.currentScenario,
      // this.virtualUrl
    ).pipe(
      map(([t, s, scen]) => {
        const internal = scen === AccessScenarios[0];
        return (internal ? '' : Environments.find(e => e.key === s).rootPath)
            + pathToContent
              .replace('{typename}', t)
              .replace('{appname}', internal ? 'auto' : appName);
      })
    );

  }

  // switchTabs(index: number) {
  //   this.virtualUrl.next(index === 0);
  // }

  callApiGet(url: Observable<string>) {
    url.pipe(
      take(1),
      tap(path => console.log(path)),
      map(path => this.http.get(path).toPromise())
    ).subscribe();
    this.openSnackBar('API call dispatched - to see it, you should have the console (F12) open.', 'API call');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
