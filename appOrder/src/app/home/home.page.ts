import { FoodInfo } from 'src/app/services/data.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../../model/foodModel';
import { StorageService } from '../services/storage.service';
import { AppService } from '../services/app.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public foods: FoodInfo[] = [];
  public searchField: string;
  constructor(
    private router: Router,
    private storageService: StorageService,
    private appService: AppService,
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {
    if (this.storageService.get('user') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/bottom-tab');
      console.log('exists');
    }
  }
  gotoCategory() {
    this.router.navigateByUrl('/info-food');
  }

  ngOnInit(): void {
    this.dataService.getFoodsInfo().subscribe((res) => {
      this.foods = res;
      this.cd.detectChanges();
    });
  }
}
