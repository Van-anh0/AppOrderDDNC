import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category-food',
  templateUrl: './category-food.page.html',
  styleUrls: ['./category-food.page.scss'],
})
export class CategoryFoodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoContact(){
    this.router.navigateByUrl('/order-food');
  }
}
