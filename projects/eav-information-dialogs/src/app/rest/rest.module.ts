import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ContentTypeRestComponent,
    QueryRestComponent,
    ItemRestComponent,
  ],
  imports: [
    CommonModule,
    RestRoutingModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class RestModule { }
