import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFoodPageRoutingModule } from './info-food-routing.module';

import { InfoFoodPage } from './info-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFoodPageRoutingModule
  ],
  declarations: [InfoFoodPage]
})
export class InfoFoodPageModule {}
