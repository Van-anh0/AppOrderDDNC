import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryFoodPage } from './category-food.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryFoodPageRoutingModule {}
