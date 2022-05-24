import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'category-food',
    pathMatch: 'full'
  },
  {
    path: 'order-table',
    loadChildren: () => import('./order-table/order-table.module').then( m => m.OrderTablePageModule)
  },
    {
    path: 'category-food',
    loadChildren: () => import('./category-food/category-food.module').then( m => m.CategoryFoodPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
