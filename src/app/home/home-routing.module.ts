import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarijuanaComponent } from './marijuana/marijuana.component';

const routes: Routes = [
  {
    path: '',
    component: MarijuanaComponent
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
export class HomeRoutingModule { }
