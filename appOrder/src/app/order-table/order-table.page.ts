import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Table, DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.page.html',
  styleUrls: ['./order-table.page.scss'],
})
export class OrderTablePage implements OnInit {

  tables: Table[] = [];
 
  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController, private router:Router) {
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

  gotoCategory(){
    this.router.navigateByUrl('/category-food')
  }
}
