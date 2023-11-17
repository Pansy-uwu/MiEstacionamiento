import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEstaPageRoutingModule } from './listar-esta-routing.module';

import { ListarEstaPage } from './listar-esta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEstaPageRoutingModule
  ],
  declarations: [ListarEstaPage]
})
export class ListarEstaPageModule {}
