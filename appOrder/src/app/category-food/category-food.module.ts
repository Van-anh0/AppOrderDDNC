import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFoodPageRoutingModule } from './category-food-routing.module';

import { CategoryFoodPage } from './category-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFoodPageRoutingModule
  ],
  declarations: [CategoryFoodPage]
})
export class CategoryFoodPageModule {}
