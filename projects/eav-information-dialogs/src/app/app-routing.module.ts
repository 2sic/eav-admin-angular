import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTypeRestComponent } from './content-type-rest/content-type-rest.component';
import { ItemRestComponent } from './item-rest/item-rest.component';
import { QueryRestComponent } from './query-rest/query-rest.component';
 
// todo 2ro: move these rest-specific routes into a rest-module, so the main app doesn't manage them
const appRoutes: Routes = [
  { path: 'rest/content-type/:name', component: ContentTypeRestComponent },
  { path: 'rest/item', component: ItemRestComponent },
  { path: 'rest/query', component: QueryRestComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      enableTracing: false // <-- debugging purposes only
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
