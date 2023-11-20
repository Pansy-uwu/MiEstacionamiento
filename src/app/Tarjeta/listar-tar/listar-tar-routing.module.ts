import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTarPage } from './listar-tar.page';

const routes: Routes = [
  {
    path: '',
    component: ListarTarPage
  },
  {
    path: 'listar-tar',
    loadChildren: () => import('../../Tarjeta/listar-tar/listar-tar.module').then( m => m.ListarTarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarTarPageRoutingModule {}
