import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  backToOrderFood(){
    this.router.navigateByUrl('/order-food')
  }
}
