import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTarPage } from './agregar-tar.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTarPageRoutingModule {}
