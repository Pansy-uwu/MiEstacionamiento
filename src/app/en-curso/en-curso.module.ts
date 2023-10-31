import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnCursoPageRoutingModule } from './en-curso-routing.module';

import { EnCursoPage } from './en-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnCursoPageRoutingModule
  ],
  declarations: [EnCursoPage]
})
export class EnCursoPageModule {}
