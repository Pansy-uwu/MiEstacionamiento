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
  path: 'en-curso',
  loadChildren: () => import('./en-curso/en-curso.module').then( m => m.EnCursoPageModule)
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
    path: 'modificar-esta',
    loadChildren: () => import('./Estacionamiento/modificar-esta/modificar-esta.module').then( m => m.ModificarEstaPageModule)
  },
  {
    path: 'modifica-datos/:id',
    loadChildren: () => import('./Cliente/modifica-datos/modifica-datos.module').then( m => m.ModificaDatosPageModule)
  }



];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
