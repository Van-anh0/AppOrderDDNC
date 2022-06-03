import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoInfoFood(){
    this.router.navigateByUrl('/info-food');
  }

}
