import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilViajePageRoutingModule } from './perfil-viaje-routing.module';

import { PerfilViajePage } from './perfil-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilViajePageRoutingModule
  ],
  declarations: [PerfilViajePage]
})
export class PerfilViajePageModule {}
