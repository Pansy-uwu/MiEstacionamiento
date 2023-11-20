import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarTarPageRoutingModule } from './modificar-tar-routing.module';

import { ModificarTarPage } from './modificar-tar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarTarPageRoutingModule
  ],
  declarations: [ModificarTarPage]
})
export class ModificarTarPageModule {}
