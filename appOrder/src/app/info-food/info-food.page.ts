import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-info-food',
  templateUrl: './info-food.page.html',
  styleUrls: ['./info-food.page.scss'],
})
export class InfoFoodPage implements OnInit {

  orderFoods:any = [];
  //orderFood = 1;
  constructor(private router: ActivatedRoute, private appService:AppService) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.getData();
    
  }

  getData(){
    this.appService.getAllOrderFoods().subscribe(orderFoods=>{
      this.orderFoods = orderFoods;
    })
  }

 

  
  
 
}
