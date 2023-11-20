import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Cliente/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Cliente/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Cliente/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'listar-esta',
    loadChildren: () => import('./Estacionamiento/listar-esta/listar-esta.module').then( m => m.ListarEstaPageModule)
  },
  {
    path: 'agregrar-esta',
    loadChildren: () => import('./Estacionamiento/agregrar-esta/agregrar-esta.module').then( m => m.AgregrarEstaPageModule)
  },
  {
    path: 'modificar-esta/:id',
    loadChildren: () => import('./Estacionamiento/modificar-esta/modificar-esta.module').then( m => m.ModificarEstaPageModule)
  },
  {
    path: 'listar-esta-usu',
    loadChildren: () => import('./Estacionamiento/listar-esta-usu/listar-esta-usu.module').then( m => m.ListarEstaUsuPageModule)
  }




];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
