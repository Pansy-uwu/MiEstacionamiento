import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'perfil-viaje',
    pathMatch: 'full'
  },
  {
    path: 'perfil-viaje',
    loadChildren: () => import('./perfil-viaje/perfil-viaje.module').then( m => m.PerfilViajePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
  path: 'en-curso',
  loadChildren: () => import('./en-curso/en-curso.module').then( m => m.EnCursoPageModule)
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
