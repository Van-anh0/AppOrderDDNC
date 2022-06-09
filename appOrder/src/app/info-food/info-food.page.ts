import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../services/app.service';
import { FoodInfo } from '../services/data.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {
  foodDetails: FoodInfo;

  constructor(
    private routerAc: ActivatedRoute,
    private appService: AppService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    const id = this.routerAc.snapshot.paramMap.get('id');
    this.dataService.getFoodById(id).subscribe((res: FoodInfo) => {
      this.foodDetails = res;
    });
    console.log(id);
  }

  backToOrderFood() {
    this.router.navigateByUrl('/order-food');
  }

  review() {
    this.router.navigateByUrl('/rating');
  }
}
