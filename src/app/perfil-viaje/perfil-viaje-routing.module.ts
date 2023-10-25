import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilViajePage } from './perfil-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilViajePageRoutingModule {}
