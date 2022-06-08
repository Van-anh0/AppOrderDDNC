import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentUser: {
    account: string;
    password: string;
  } = null;

  users: any = [];

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>('../../../assets/model/user.json');
  }

  getAllMyOrders() {
    return this.http.get<any>('../../../assets/model/my-order.json');
  }

  getAllOrderFoods(){
    return this.http.get<any>('../../../assets/model/order-food.json');
  }

 
  login() {
    this.getAllUsers().subscribe((res) => {
      const user = res.find((a: any) => {
        return a.account === this.currentUser.account && a.password === this.currentUser.password;
      });
    });
  }
}
