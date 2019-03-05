import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-type-rest',
  templateUrl: './content-type-rest.component.html',
  styleUrls: ['./content-type-rest.component.css']
})
export class ContentTypeRestComponent implements OnInit {

  contentTypeName$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.contentTypeName$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        params.get('name')
        // this.service.getHero(params.get('id')))
    ));
  }

}
