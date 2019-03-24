import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemRestComponent } from './item/item.component';
import { QueryRestComponent } from './query/query.component';
import { ContentTypeRestComponent } from './content-type/content-type.component';

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
