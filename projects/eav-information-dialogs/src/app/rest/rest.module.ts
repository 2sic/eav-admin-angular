import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { RestRoutingModule } from './rest-routing.module';

@NgModule({
  declarations: [
    ContentTypeRestComponent,
    QueryRestComponent,
    ItemRestComponent,
  ],
  imports: [
    CommonModule,
    RestRoutingModule
  ]
})
export class RestModule { }
