import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderFoodPageRoutingModule } from './order-food-routing.module';
import { OrderFoodPage } from './order-food.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFoodPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [OrderFoodPage],
})
export class OrderFoodPageModule {}
