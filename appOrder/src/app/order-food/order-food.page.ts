import { map } from '@firebase/util';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, FoodInfo } from 'src/app/services/data.service';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Food } from 'src/model/foodModel';
@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.page.html',
  styleUrls: ['./order-food.page.scss'],
})
export class OrderFoodPage implements OnInit {
  public foods: FoodInfo[] = [];
  id : string;
  public searchField: FormControl;

  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private router: Router,
    private routerAc: ActivatedRoute
  ) {
    this.searchField = new FormControl('');
    // this.dataService.getFoodsInfo().subscribe((res) => {
    //   this.foods = res;
    //   this.cd.detectChanges();
    // });
    
  }
  ngOnInit() {
    const id = this.routerAc.snapshot.queryParamMap.get('id');
    this.id = id;
    this.dataService.getFoodsByCate(id).subscribe(res => {
      this.foods = res;
    });
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


  goToInfo(id) {
    const params: NavigationExtras = {
      queryParams: { id },
    };
    this.router.navigate(['/info-food'], params);
  }
}
