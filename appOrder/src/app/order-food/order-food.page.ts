import { map } from '@firebase/util';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, FoodInfo } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {
  public foods: FoodInfo[] = [];
  public searchField: FormControl;
  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.searchField = new FormControl('');
    this.dataService.getFoodsInfo().subscribe((res) => {
      this.foods = res;
      this.cd.detectChanges();
    });
  }
  ngOnInit() {
    //  this.getData();
  }

  async searchProduct() {
    const searchItem = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );

    const foodList = this.dataService.getFoodsInfo().subscribe((res) => {
      this.foods = res;
    });
  }


  goToCate(){
    const params: NavigationExtras = {
      queryParams: { tableid: 1, id: 2, abc:3},
    };
    this.router.navigate(['/category-food'], params);
  }
}
