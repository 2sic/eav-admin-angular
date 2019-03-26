import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { StateService } from './state/state.service';
import { filter } from 'rxjs/operators';
import { DnnAppComponent, Context } from '@2sic.com/dnn-sxc-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
extends DnnAppComponent
implements OnInit {
  constructor(
    private state: StateService,
    private route: ActivatedRoute,
    private router: Router,
    el: ElementRef,
    context: Context
  ) {
    super(el, context);

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const locationHashes = window.location.hash.split('#').slice(1);

      if (locationHashes.length >= 2) {
        const initParamString = locationHashes[1].substring(1);
        const initParamPairArray = initParamString.split('&');

        initParamPairArray.map(pair => {
          const initParams = pair.split('=');
          this.state.putUrlParamsInLocalStorage(initParams);
        });
      }
    });
  }

  ngOnInit() {

  }
}
