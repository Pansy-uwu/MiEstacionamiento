import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaDatosPageRoutingModule } from './modifica-datos-routing.module';

import { ModificaDatosPage } from './modifica-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaDatosPageRoutingModule
  ],
  declarations: [ModificaDatosPage]
})
export class ModificaDatosPageModule {}
