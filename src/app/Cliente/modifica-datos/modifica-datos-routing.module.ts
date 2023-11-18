import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaDatosPage } from './modifica-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaDatosPageRoutingModule {}
