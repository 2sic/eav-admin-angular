import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';

const routes: Routes = [
  { path: 'query', component: QueryRestComponent },
  { path: 'item', component: ItemRestComponent },
  { path: 'content-type/:name', component: ContentTypeRestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestRoutingModule { }
