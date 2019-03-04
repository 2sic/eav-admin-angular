import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTypeRestComponent,
    ItemRestComponent,
    QueryRestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
