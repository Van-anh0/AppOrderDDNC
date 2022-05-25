import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  orderFoods = [{
    "id":"1",
    "image":"assets/icon/cart.png",
    "categoryID":"1",
    "name":"Hamburger",
    "amount":"60$",

  },
  {
    "id":"2",
    "image":"assets/icon/cart.png",
    "categoryID":"1",
    "name":"Hamburgermum",
    "amount":"80$",

  },

  {
    "id":"3",
    "image":"assets/icon/cart.png",
    "categoryID":"1",
    "name":"Hamburgermumi",
    "amount":"90$",

  },
]

}
