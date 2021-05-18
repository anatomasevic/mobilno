import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugaPage } from './druga.page';

const routes: Routes = [
  {
    path: '',
    component: DrugaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugaPageRoutingModule {}
