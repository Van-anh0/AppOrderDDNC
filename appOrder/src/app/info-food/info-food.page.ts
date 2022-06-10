import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {

  orderFoods:any = [];
  //orderFood = 1;
  constructor(private routerAc: ActivatedRoute, private appService:AppService, private router:Router) { }

  ngOnInit() {
    const id = this.routerAc.snapshot.paramMap.get('id');
    console.log(id);
    this.getData();
    
  }

  backToOrderFood() {
    this.router.navigateByUrl('/order-food')
  }

  getData(){
    this.appService.getAllOrderFoods().subscribe(orderFoods=>{
      this.orderFoods = orderFoods;
    })
  }

  review(){
    this.router.navigateByUrl('/rating')
  }

 

  
  
 
}
