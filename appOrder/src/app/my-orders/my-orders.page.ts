import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  myOrders:any = [];

  constructor(public loadingController:LoadingController,
    private appService:AppService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.appService.getAllMyOrders().subscribe(myOrders => {
      console.log(myOrders);
      this.myOrders = myOrders;
    })
  }
}
