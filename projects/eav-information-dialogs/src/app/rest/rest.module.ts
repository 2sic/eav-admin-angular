import { LibraryModule } from '../library/library.module';
import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { RestContentTypeComponent } from './content-type/content-type.component';
import { RestQueryComponent } from './query/query.component';
import { RestItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { DnnInterceptor, RuntimeSettings } from '@2sic.com/dnn-sxc-angular';
import { DnnDevSettings } from '../dev/dnn-dev-settings';
import { environment } from '../../environments/environment';

const providers: Provider[] = [
  DnnInterceptor
];

if (!environment.production) {
  providers.push({ provide: RuntimeSettings, useValue: DnnDevSettings });
}

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
  providers
})
export class RestModule { }
