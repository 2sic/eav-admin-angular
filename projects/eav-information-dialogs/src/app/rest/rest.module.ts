import { LibraryModule } from '../library/library.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { RestContentTypeComponent } from './content-type/content-type.component';
import { RestQueryComponent } from './query/query.component';
import { RestItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { addDnnProviders } from '../integration/providers';

@NgModule({
  declarations: [
    RestContentTypeComponent,
    RestQueryComponent,
    RestItemComponent,
  ],
  imports: [
    CommonModule,
    RestRoutingModule,
    MaterialModule,
    HttpClientModule,
    LibraryModule
  ],
  providers: addDnnProviders([]),
})
export class RestModule { }
