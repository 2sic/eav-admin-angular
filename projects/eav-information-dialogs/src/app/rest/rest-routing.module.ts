import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestItemComponent } from './item/item.component';
import { RestQueryComponent } from './query/query.component';
import { RestContentTypeComponent } from './content-type/content-type.component';

const routes: Routes = [
  { path: 'query', component: RestQueryComponent },
  { path: 'item', component: RestItemComponent },
  { path: 'content-type/:name', component: RestContentTypeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestRoutingModule { }
