import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacijentPageRoutingModule } from './pacijent-routing.module';

import { PacijentPage } from './pacijent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacijentPageRoutingModule
  ],
  declarations: [PacijentPage]
})
export class PacijentPageModule {}
