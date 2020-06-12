import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticaPage } from './estadistica.page';

const routes: Routes = [
  {
    path: '',
    component: EstadisticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticaPageRoutingModule {}
