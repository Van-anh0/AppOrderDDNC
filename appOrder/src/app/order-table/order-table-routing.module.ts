import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderTablePage } from './order-table.page';

const routes: Routes = [
  {
    path: '',
    component: OrderTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderTablePageRoutingModule {}
