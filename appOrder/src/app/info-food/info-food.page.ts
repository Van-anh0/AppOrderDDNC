import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { DataService, FoodInfo } from '../services/data.service';
@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {

  orderFoods: any = [];
  food: FoodInfo;
  id : string;
  orderFood = 1;
  constructor(private routerAc: ActivatedRoute, private appService: AppService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    const id = this.routerAc.snapshot.queryParamMap.get('id');
    this.id = id;
    this.dataService.getFoodById(id).subscribe(res => {
      this.food = res;
    });
    // this.dataService.getFoodById(id).then(res=>{
    //   this.food = res.data();
    //   console.log(res)
    // })
   //this.getData();
  }

  backToOrderFood() {
    this.router.navigateByUrl('/order-food');
  }

  getData() {
    this.appService.getAllOrderFoods().subscribe(orderFoods => {
      this.orderFoods = orderFoods;
    })
  }

  review() {
    this.router.navigateByUrl('/rating')
  }
}
