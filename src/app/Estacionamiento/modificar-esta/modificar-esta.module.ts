import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ModificarEstaPageRoutingModule } from './modificar-esta-routing.module';

import { ModificarEstaPage } from './modificar-esta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarEstaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModificarEstaPage]
})
export class ModificarEstaPageModule {}
