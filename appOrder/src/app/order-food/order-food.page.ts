import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, FoodInfo } from 'src/app/services/data.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {

  foods: FoodInfo[] = [];
 
  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController, private router:Router) {
    this.dataService.getFoodsInfo().subscribe(res => {
      this.foods = res;
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
  //  this.getData();
  }

  // getData(){
  //   this.appService.getAllOrderFoods().subscribe(orderFoods => {
  //     this.orderFoods = orderFoods;
  //   })
  // }

}
