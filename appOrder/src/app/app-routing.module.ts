import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  

  {
    path: 'info-food',
    loadChildren: () => import('./info-food/info-food.module').then( m => m.InfoFoodPageModule)
  },
  {
    path: 'order-food',
    loadChildren: () => import('./order-food/order-food.module').then( m => m.OrderFoodPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: //'bottom-tab-page', 
    'order-food',
    pathMatch: 'full'
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },

  
    {
    path: 'category-food',
    loadChildren: () => import('./category-food/category-food.module').then( m => m.CategoryFoodPageModule)
  },
  {
    path: 'bottom-tab-page',
    loadChildren: () => import('./bottom-tab-page/bottom-tab-page.module').then( m => m.BottomTabPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },

//   {
//     path: 'info-food',
//     loadChildren: () => import('./info-food/info-food.module').then( m => m.InfoFoodPageModule)
//   },
//   {
//     path: 'order-food',
//     loadChildren: () => import('./order-food/order-food.module').then( m => m.OrderFoodPageModule)
//   },

//   {
//     path: 'login',
//     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'register',
//     loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home', 
//     pathMatch: 'full'
//   },
//   {
//     path: 'rating',
//     loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
//   },
//   {
//     path: 'profile',
//     loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
//   },
//   {
//     path: 'setting',
//     loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
//   },
//   {
//   path: 'message',
//     loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
//   },
//   {
//     path: 'contact',
//     loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
//   },
//   {
//     path: 'my-orders',
//     loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
//   },


// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
