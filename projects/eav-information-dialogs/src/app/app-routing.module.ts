import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const appRoutes: Routes = [];
=======
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
>>>>>>> 9e8ccd1d401a65226bb026ab7ef0e236269a72da

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      enableTracing: false // <-- debugging purposes only
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
