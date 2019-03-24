import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { ContentTypeRestComponent } from './content-type/content-type.component';
import { QueryRestComponent } from './query/query.component';
import { ItemRestComponent } from './item/item.component';
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
