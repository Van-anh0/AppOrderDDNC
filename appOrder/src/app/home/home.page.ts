import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../../model/foodModel';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listFood: Food[] = [];

  constructor(private router: Router, private storageService: StorageService) {
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
}
