import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiverentPage } from './activerent.page';

const routes: Routes = [
  {
    path: '',
    component: ActiverentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiverentPageRoutingModule {}
