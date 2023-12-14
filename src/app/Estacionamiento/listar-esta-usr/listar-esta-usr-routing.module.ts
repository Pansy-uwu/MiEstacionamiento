import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEstaUsrPage } from './listar-esta-usr.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEstaUsrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEstaUsrPageRoutingModule {}
