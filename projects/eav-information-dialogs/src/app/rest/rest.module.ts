import { MiniPartsModule } from './../mini-parts/mini-parts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { RestContentTypeComponent } from './content-type/content-type.component';
import { RestQueryComponent } from './query/query.component';
import { RestItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
// import { SelectorObservableComponent } from '../selector-observable/selector-observable.component';

@NgModule({
  declarations: [
    RestContentTypeComponent,
    RestQueryComponent,
    RestItemComponent,
    // SelectorObservableComponent
  ],
  imports: [
    CommonModule,
    RestRoutingModule,
    MaterialModule,
    HttpClientModule,
    MiniPartsModule
  ]
})
export class RestModule { }
