import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService, User } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { DocumentSnapshot } from 'firebase/firestore';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private dataService: DataService,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      account: [''],
      password: [''],
      name: [''],
    });
  }

  gotoLoginPage() {
    this.router.navigateByUrl('/login');
  }

  async register() {
    if (await this.dataService.checkAccountExists(this.registerForm.value.account)) {
      const toast = this.toastCtrl.create({
        message: 'Đăng ký không thành công',
        duration: 5000,
        color: 'dark',
      });
      (await toast).present();
    } else {
      const user = await this.dataService.addUser(this.registerForm.value);
      const userSnap = await(await (this.dataService.getUserById(user.id)));
      await userSnap.subscribe(val => {
        localStorage.setItem('user', JSON.stringify(val));
      });
      const toast = this.toastCtrl.create({
        message: 'Đăng ký thành công',
        duration: 5000,
        color: 'dark',
      });
      (await toast).present();
      this.router.navigateByUrl('/bottom-tab');
    }
  }
}
