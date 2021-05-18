import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CetvrtaPageRoutingModule } from './cetvrta-routing.module';

import { CetvrtaPage } from './cetvrta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CetvrtaPageRoutingModule
  ],
  declarations: [CetvrtaPage]
})
export class CetvrtaPageModule {}
