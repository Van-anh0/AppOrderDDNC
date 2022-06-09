import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  public orderFull;
  public tableId: string;
  constructor(private dataService: DataService) {}

  async ngOnInit() {
    this.orderFull = [];
    const orderData = await this.dataService.getOrder();
    this.tableId = orderData.tableId === '0' ? 'Mang về': `Bàn ${orderData.tableId}`;
    for(const i of orderData.foods){
      const foodInfo = await this.dataService.getFoodInfo(i.food);
      this.orderFull.push({
        id: i.food,
        quantity: i.amount,
        ... foodInfo
      });
    }
  }
  async handleRemove(food){
    console.log('huy ' + food );
    await this.dataService.removeFoodToOrder(food);
    await this.ngOnInit();
  }
}
