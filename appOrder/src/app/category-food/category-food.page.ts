import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';
import { Category, DataService } from 'src/app/services/data.service';
import { ModalPage } from '../pages/modal/modal.page';
@Component({
  selector: 'app-category-food',
  templateUrl: './category-food.page.html',
  styleUrls: ['./category-food.page.scss'],
})
export class CategoryFoodPage implements OnInit {
  categories: Category[] = [];

  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.dataService.getCategories().subscribe((res) => {
      this.categories = res;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}
  gotoOrderFood() {
    this.router.navigateByUrl('/order-food');
  }
}
