import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFoodPageRoutingModule } from './category-food-routing.module';

import { CategoryFoodPage } from './category-food.page';
import { BottomTabPagePage } from '../bottom-tab-page/bottom-tab-page.page';
import { BottomTabPagePageModule } from '../bottom-tab-page/bottom-tab-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFoodPageRoutingModule,
    BottomTabPagePageModule
  ],
  declarations: [CategoryFoodPage, BottomTabPagePage]
})
export class CategoryFoodPageModule {}
