import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActiverentPage } from './activerent/activerent.page';
import { RentPage } from './rent/rent.page';
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
    path: 'arriendo-activo', 
    component: ActiverentPage
  },
  { 
    path: 'arriendo', 
    component: RentPage
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
