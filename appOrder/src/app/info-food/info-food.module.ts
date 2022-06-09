import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoFoodPageRoutingModule } from './info-food-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InfoFoodPage } from './info-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoFoodPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [InfoFoodPage]
})
export class InfoFoodPageModule {}
