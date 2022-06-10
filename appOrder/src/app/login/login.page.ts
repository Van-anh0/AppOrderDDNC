import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public singInForm!: FormGroup;
  user: any = [];
  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private storageService: StorageService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.singInForm = this.formBuilder.group({
      account: [''],
      password: [''],
    });
  }

  gotoRegisterPage() {
    this.router.navigateByUrl('/register');
  }

  gotoHome() {
    this.router.navigateByUrl('/bottom-tab');
  }

  async login() {
    this.dataService.getUser().subscribe(async (result) => {
      const users = result.find(
        (a: any) => a.account === this.singInForm.value.account &&
          a.password === this.singInForm.value.password
      );
      if (users) {
        this.user = users;
        this.storageService.store('users', this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('/bottom-tab');
      } else {
        const toast = this.toastCtrl.create({
          message: 'Đăng nhập không thành công',
          duration: 5000,
          color: 'dark',
        });
        (await toast).present();
      }
    });
  }

  getCurrentUser() {
    return this.singInForm.value;
  }
}
