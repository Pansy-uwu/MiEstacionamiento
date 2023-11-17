import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregrarEstaPage } from './agregrar-esta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregrarEstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregrarEstaPageRoutingModule {}
