import { AccessScenarios } from './../access-scenarios';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { StateService } from '../../state/state.service';
import { Environments } from '../environments';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

const pathToContent = '{appname}/content/{typename}';

@Component({
  selector: 'app-content-type-rest',
  templateUrl: './content-type-rest.component.html',
  styleUrls: ['./content-type-rest.component.css']
})
export class ContentTypeRestComponent implements OnInit {
  /** name of the type to show REST infos about */
  typeName$: Observable<string>;

  // contentTypeId$: Observable<string>;

  /** list of all known environments */
  environments = Environments;
  scenarios = AccessScenarios;

  /** currently selected system, needed for calculating correct urls */
  system = new BehaviorSubject<string>(Environments[0].key);

  currentEnv = this.system.pipe(map(s => Environments.find(e => e.key === s)));

  scenario = new BehaviorSubject<string>(AccessScenarios[0].key);
  currentScenario = this.scenario.pipe(map(s => AccessScenarios.find(as => as.key === s)));

  /** root path for auto-app-detection */
  rootAuto$: Observable<string>;

  /** root path for named apps */
  rootNamed$: Observable<string>;

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

    const rootWithoutApp$ = combineLatest(
      this.typeName$,
      this.system.asObservable()
    ).pipe(
      map(([t, s]) => {
        return (
          Environments.find(e => e.key === s).rootPath +
          pathToContent.replace('{typename}', t)
        );
      })
    );

    this.rootAuto$ = rootWithoutApp$.pipe(
      map(r => r.replace('{appname}', 'auto'))
    );

    // extract real app-name from the app-path and provide it in the named-root
    const appPath = this.state.rootApp || '/put-app-name-here/';
    const appName = appPath.substring(
      appPath.lastIndexOf('/') + 1,
      appPath.length
    );
    this.rootNamed$ = rootWithoutApp$.pipe(
      map(r => r.replace('{appname}', appName))
    );

    // testing
    this.system.subscribe(s => console.log('system changed to:' + s));
  }

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
