import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { StateService } from '../../state/state.service';
import { Environments } from '../environments';

const pathToContent = '{appname}/content/{typename}';


@Component({
  selector: 'app-content-type-rest',
  templateUrl: './content-type-rest.component.html',
  styleUrls: ['./content-type-rest.component.css']
})
export class ContentTypeRestComponent implements OnInit {

  typeName$: Observable<string>;
  contentTypeId$: Observable<string>;

  environments = Environments;

  private system = new BehaviorSubject<string>(Environments[0].key);

  rootAuto$: Observable<string>;
  rootNamed$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
  ) {

   }

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

    const rootWithoutApp$ = combineLatest(this.typeName$, this.system.asObservable(), (t, s) => {
      return Environments.find(e => e.key === s).rootPath
        + pathToContent.replace('{typename}', t);
    });

    this.rootAuto$ = rootWithoutApp$.pipe(map(r => r.replace('{appname}', 'auto')));
    this.rootNamed$ = rootWithoutApp$.pipe(map(r => r.replace('{appname}', 'put-the-app-name-here')));
  }



}
