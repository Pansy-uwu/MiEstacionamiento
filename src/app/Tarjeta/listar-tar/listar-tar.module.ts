import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarTarPageRoutingModule } from './listar-tar-routing.module';

import { ListarTarPage } from './listar-tar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarTarPageRoutingModule
  ],
  declarations: [ListarTarPage]
})
export class ListarTarPageModule {}
