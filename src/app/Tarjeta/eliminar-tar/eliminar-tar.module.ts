import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarTarPageRoutingModule } from './eliminar-tar-routing.module';

import { EliminarTarPage } from './eliminar-tar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarTarPageRoutingModule
  ],
  declarations: [EliminarTarPage]
})
export class EliminarTarPageModule {}
