import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestRoutingModule } from './rest-routing.module';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { MatSelectModule, MatButtonModule, MatDialogModule, MatSnackBarModule, MatIconModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContentTypeRestComponent,
    QueryRestComponent,
    ItemRestComponent,
  ],
  imports: [
    CommonModule,
    RestRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ]
})
export class RestModule { }
