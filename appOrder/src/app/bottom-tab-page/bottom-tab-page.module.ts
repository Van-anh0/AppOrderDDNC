import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomTabPagePageRoutingModule } from './bottom-tab-page-routing.module';

import { BottomTabPagePage } from './bottom-tab-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomTabPagePageRoutingModule
  ],
  declarations: [BottomTabPagePage]
})
export class BottomTabPagePageModule {}
