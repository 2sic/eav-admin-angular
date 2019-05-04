import { Environment } from './../environments';
import { AccessScenarios } from '../access-scenarios';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { StateService } from '../../state/state.service';
import { Environments } from '../environments';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { SelectorObservableComponent } from '../../library/selector-observable/selector-observable.component';
import { SelectorData } from '../../library/selector-observable/selector-data';

const pathToContent = 'app/{appname}/content/{typename}';

@Component({
  // selector: 'app-rest-content-type',
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.css']
})
export class RestContentTypeComponent implements OnInit, AfterViewInit {
  @ViewChild('scenarioPicker') scenarioPicker: SelectorObservableComponent;
  @ViewChild('environmentPicker') envPicker: SelectorObservableComponent;

  /** name of the type to show REST infos about */
  typeName$: Observable<string>;

  /** list of all known environments */
  environments = Environments;

  /** currently selected environment object */
  currentEnv: Observable<SelectorData>;

  /** list of scenarios */
  scenarios = AccessScenarios;

  /** currently selected scenario */
  currentScenario: Observable<SelectorData>;

  /** The root path for the current request */
  root$: Observable<string>;

  modeInternal = true;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef
  ) {
    console.log('debug http', http);
  }

  ngOnInit() {
  }

  /** attach things we couldn't before the parts were assembled */
  ngAfterViewInit() {
    this.currentScenario = this.scenarioPicker.current$;
    this.currentEnv = this.envPicker.current$;
    this.currentScenario.subscribe(cs => this.modeInternal = cs.key === 'internal');
    this.wireUpObservables();
    // explicitly declare that we made changes
    this.cdRef.detectChanges();
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
      this.currentEnv,
      this.currentScenario,
    ).pipe(
      map(([t, s, scen]) => {
        const internal = scen === AccessScenarios[0];
        return (internal ? '' : (s as Environment).rootPath)
            + pathToContent
              .replace('{typename}', t)
              .replace('{appname}', internal ? 'auto' : appName);
      })
    );

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
