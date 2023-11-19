import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEstaUsuPageRoutingModule } from './listar-esta-usu-routing.module';

import { ListarEstaUsuPage } from './listar-esta-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEstaUsuPageRoutingModule
  ],
  declarations: [ListarEstaUsuPage]
})
export class ListarEstaUsuPageModule {}
