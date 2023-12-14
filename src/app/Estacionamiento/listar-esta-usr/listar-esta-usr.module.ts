import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEstaUsrPageRoutingModule } from './listar-esta-usr-routing.module';

import { ListarEstaUsrPage } from './listar-esta-usr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEstaUsrPageRoutingModule
  ],
  declarations: [ListarEstaUsrPage]
})
export class ListarEstaUsrPageModule {}
