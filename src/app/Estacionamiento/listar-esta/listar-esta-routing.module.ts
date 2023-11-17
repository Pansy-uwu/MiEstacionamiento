import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEstaPage } from './listar-esta.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEstaPageRoutingModule {}
