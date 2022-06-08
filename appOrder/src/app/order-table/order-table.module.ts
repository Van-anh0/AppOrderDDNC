import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderTablePageRoutingModule } from './order-table-routing.module';

import { OrderTablePage } from './order-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderTablePageRoutingModule
  ],
  declarations: [OrderTablePage]
})
export class OrderTablePageModule {}
