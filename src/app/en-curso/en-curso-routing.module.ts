import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnCursoPage } from './en-curso.page';

const routes: Routes = [
  {
    path: '',
    component: EnCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnCursoPageRoutingModule {}
