import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'info-food',
    loadChildren: () => import('./info-food/info-food.module').then( m => m.InfoFoodPageModule)
  },
  {
    path: 'order-food',
    loadChildren: () => import('./order-food/order-food.module').then( m => m.OrderFoodPageModule)
  },
  {
    path: '',
    redirectTo: 'order-food',
    pathMatch: 'full'
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
