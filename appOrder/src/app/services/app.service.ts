import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentUser: {
    account: string;
    password: string;
    name: number;
  } = null;

  users: any = [];

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/users');
  }

  getAllMyOrders() {
    return this.http.get<any>('../../../assets/model/my-order.json');
  }
}
