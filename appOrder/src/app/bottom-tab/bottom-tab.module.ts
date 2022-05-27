import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomTabPageRoutingModule } from './bottom-tab-routing.module';

import { BottomTabPage } from './bottom-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomTabPageRoutingModule
  ],
  declarations: [BottomTabPage]
})
export class BottomTabPageModule {}
