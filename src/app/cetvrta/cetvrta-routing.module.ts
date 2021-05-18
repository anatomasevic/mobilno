import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CetvrtaPage } from './cetvrta.page';

const routes: Routes = [
  {
    path: '',
    component: CetvrtaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CetvrtaPageRoutingModule {}
