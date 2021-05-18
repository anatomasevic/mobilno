import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacijentPage } from './pacijent.page';

const routes: Routes = [
  {
    path: '',
    component: PacijentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacijentPageRoutingModule {}
