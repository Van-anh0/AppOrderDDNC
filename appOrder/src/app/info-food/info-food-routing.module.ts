import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoFoodPage } from './info-food.page';

const routes: Routes = [
  {
    path: '',
    component: InfoFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoFoodPageRoutingModule {}
