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
  contentTypeId$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.contentTypeName$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        return params.get('name');
      })
    );

    // console.log(this.route.snapshot.queryParams.test);

    // this.route.queryParams.subscribe(params => {
    //   console.log(params.test);
    // });
  }

}
