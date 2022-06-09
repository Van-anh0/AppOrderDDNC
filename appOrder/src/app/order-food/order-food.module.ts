import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OrderFoodPageRoutingModule } from './order-food-routing.module';
import { OrderFoodPage } from './order-food.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderFoodPageRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [OrderFoodPage],
})
export class OrderFoodPageModule {}
