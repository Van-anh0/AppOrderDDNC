import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.page.html',
  styleUrls: ['./order-table.page.scss'],
})
export class OrderTablePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoCategory(){
    this.router.navigateByUrl('/category-food');
  }

  gotoCart(){
    this.router.navigateByUrl('/my-orders');
  }
}
