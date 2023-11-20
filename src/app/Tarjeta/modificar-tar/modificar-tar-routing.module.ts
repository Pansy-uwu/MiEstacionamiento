import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarTarPage } from './modificar-tar.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarTarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarTarPageRoutingModule {}
