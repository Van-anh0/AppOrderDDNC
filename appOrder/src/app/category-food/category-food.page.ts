import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodCategory } from 'src/model/foodModel';
@Component({
  selector: 'app-category-food',
  templateUrl: './category-food.page.html',
  styleUrls: ['./category-food.page.scss'],
})
export class CategoryFoodPage implements OnInit {
  ll: string[] = [];
  constructor(private router: Router) {
    this.getData();

   }

  ngOnInit() {
  }
  async getData(){
    this.ll=(await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=> json));
    console.log(this.ll);
  }
  gotoContact(){
    this.router.navigateByUrl('/order-food');
  }
}
