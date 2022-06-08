import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../../model/foodModel';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listFood: Food[] = [];
  constructor(private router: Router) {
    (async () => await this.getData())();
  }
  async getData() {
    this.listFood = await fetch('https://fakestoreapi.com/products?limit=5')
      .then((res) => res.json())
      .then((json) => json as Food[]);
  }
  gotoCategory() {
    this.router.navigateByUrl('/info-food');
  }
}
