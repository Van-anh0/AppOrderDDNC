import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFoodPage } from './order-food.page';

const routes: Routes = [
  {
    path: '',
    component: OrderFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderFoodPageRoutingModule {}
