import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService, FoodInfo } from '../services/data.service';

@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {
  public foodData: FoodInfo;
  public id: string;
  //orderFood = 1;
  constructor(
    private routerAc: ActivatedRoute,
    private router: Router,
    private dataSerivce: DataService
  ) {
    this.id = this.routerAc.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.foodData = await this.getData(this.id);
  }

  backToOrderFood() {
    this.router.navigateByUrl('/order-food');
  }

  getData(id: string) {
    return this.dataSerivce.getFoodInfo(id);
  }

  review() {
    this.router.navigateByUrl('/rating');
  }
  handleOrder(){
    this.dataSerivce.addFoodToOrder(this.id);
  }
}
