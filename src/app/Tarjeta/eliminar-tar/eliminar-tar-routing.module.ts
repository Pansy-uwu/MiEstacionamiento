import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarTarPage } from './eliminar-tar.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarTarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarTarPageRoutingModule {}
