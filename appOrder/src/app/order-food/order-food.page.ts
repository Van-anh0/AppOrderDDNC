import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, FoodInfo } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {
  public foods: FoodInfo[] = [];
  public foodList: Observable<FoodInfo[]>;
  public searchField!: string;
  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {}
  async ngOnInit() {
    this.dataService.getFoodsInfo().subscribe((res) => {
      this.foods = res;
      this.cd.detectChanges();
    });
  }
}
