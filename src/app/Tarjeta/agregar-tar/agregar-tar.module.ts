import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTarPageRoutingModule } from './agregar-tar-routing.module';

import { AgregarTarPage } from './agregar-tar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTarPageRoutingModule
  ],
  declarations: [AgregarTarPage]
})
export class AgregarTarPageModule {}
