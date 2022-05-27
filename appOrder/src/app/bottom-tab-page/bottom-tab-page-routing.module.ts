import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomTabPagePage } from './bottom-tab-page.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BottomTabPagePage,
    children:[
      {
        path:'home',
        children:[
          {
            path:'',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path:'message',
        children:[
          {
            path:'',
            loadChildren: () => import('../message/message.module').then( m => m.MessagePageModule)
          }

        ]
      },
      {
        path:'order',
        children:[
          {
            path:'',
            loadChildren: () => import('../order-table/order-table.module').then( m => m.OrderTablePageModule)
          }

        ]
      },
      {
        path: 'setting',
        children:[
          {
            path:'',
            loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
          }

        ]
      },
      {
        path: 'contact',
        children:[
          {
            path:'',
            loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
          }

        ]
      },
      {
        path:'',
        redirectTo:'tabs/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomTabPagePageRoutingModule {}
