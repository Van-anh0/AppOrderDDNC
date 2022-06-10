/* eslint-disable max-len */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController, ModalController } from '@ionic/angular';
import { Table, DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.page.html',
  styleUrls: ['./order-table.page.scss'],
})
export class OrderTablePage implements OnInit {

  tables: Table[] = [];
 
  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController, private router:Router,
    public navCtrl: NavController) {
    this.dataService.getTables().subscribe(res => {
      this.tables = res;
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
  }
  gotoCart(){
    this.router.navigateByUrl('/my-orders');
  }

  gotoCategory(id){;
    this.dataService.createOrder(id);
    this.router.navigateByUrl('/category-food');
  }

  goToCate(){
    const params: NavigationExtras = {
      queryParams: { tableid: 1, id: 2, abc:3},
    };
    this.router.navigate(['/category-food'], params);
  }
}
