import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {

  orderFoods:any = [];

  constructor(public loadingController: LoadingController, private appService:AppService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.appService.getAllOrderFoods().subscribe(orderFoods => {
      this.orderFoods = orderFoods;
    })
  }

}
