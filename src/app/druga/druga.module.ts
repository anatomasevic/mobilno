import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrugaPageRoutingModule } from './druga-routing.module';

import { DrugaPage } from './druga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrugaPageRoutingModule
  ],
  declarations: [DrugaPage]
})
export class DrugaPageModule {}
