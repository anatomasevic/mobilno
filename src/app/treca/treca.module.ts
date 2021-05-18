import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrecaPageRoutingModule } from './treca-routing.module';

import { TrecaPage } from './treca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrecaPageRoutingModule
  ],
  declarations: [TrecaPage]
})
export class TrecaPageModule {}
