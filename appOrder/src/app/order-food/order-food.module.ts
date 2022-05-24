import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderFoodPageRoutingModule } from './order-food-routing.module';

import { OrderFoodPage } from './order-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFoodPageRoutingModule
  ],
  declarations: [OrderFoodPage]
})
export class OrderFoodPageModule {}
