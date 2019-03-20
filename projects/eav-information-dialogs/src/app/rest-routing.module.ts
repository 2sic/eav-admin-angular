import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';

const routes: Routes = [
  { path: 'rest/query', component: QueryRestComponent },
  { path: 'rest/item', component: ItemRestComponent },
  { path: 'rest/content-type/:name', component: ContentTypeRestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestRoutingModule { }
