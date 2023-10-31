import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiverentPageRoutingModule } from './activerent-routing.module';

import { ActiverentPage } from './activerent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiverentPageRoutingModule
  ],
  declarations: [ActiverentPage]
})
export class ActiverentPageModule {}
