import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrecaPage } from './treca.page';

const routes: Routes = [
  {
    path: '',
    component: TrecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrecaPageRoutingModule {}
