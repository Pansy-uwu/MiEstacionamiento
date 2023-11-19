import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEstaUsuPage } from './listar-esta-usu.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstaUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEstaUsuPageRoutingModule {}
