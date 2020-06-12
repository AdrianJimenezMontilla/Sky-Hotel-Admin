import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticaPageRoutingModule } from './estadistica-routing.module';

import { EstadisticaPage } from './estadistica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticaPageRoutingModule
  ],
  declarations: [EstadisticaPage]
})
export class EstadisticaPageModule {}
