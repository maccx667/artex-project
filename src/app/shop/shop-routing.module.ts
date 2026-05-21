import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLeftSidebarComponent } from './product/sidebar/product-left-sidebar/product-left-sidebar.component';

import { CollectionLeftSidebarComponent } from './collection/collection-left-sidebar/collection-left-sidebar.component';


import { Resolver } from '../shared/services/resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CollectionLeftSidebarComponent
  },
  {
    path: 'product/:slug',
    component: ProductLeftSidebarComponent,
    resolve: {
      data: Resolver
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
