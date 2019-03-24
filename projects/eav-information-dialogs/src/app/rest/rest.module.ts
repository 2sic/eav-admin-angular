import { ScenarioSelectorComponent } from './scenario-selector/scenario-selector.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { RestContentTypeComponent } from './content-type/content-type.component';
import { RestQueryComponent } from './query/query.component';
import { RestItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { EnvironmentSelectorComponent } from './environment-selector/environment-selector.component';

@NgModule({
  declarations: [
    RestContentTypeComponent,
    RestQueryComponent,
    RestItemComponent,
    EnvironmentSelectorComponent,
    ScenarioSelectorComponent
  ],
  imports: [
    CommonModule,
    RestRoutingModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class RestModule { }
