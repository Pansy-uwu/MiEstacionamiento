import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgregrarEstaPageRoutingModule } from './agregrar-esta-routing.module';

import { AgregrarEstaPage } from './agregrar-esta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregrarEstaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregrarEstaPage]
})
export class AgregrarEstaPageModule {}
