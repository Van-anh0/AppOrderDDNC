import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { FoodInfo, DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {

  orderFoods:any = [];
  food: FoodInfo = null;
  constructor(private routerAc: ActivatedRoute, private appService:AppService, private router:Router, private dataService : DataService) { }

  ngOnInit() {
    const id = this.routerAc.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getFoodById(id).subscribe(res => {
      this.food = res;
    });
    this.getData();
    
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
