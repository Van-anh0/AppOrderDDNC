import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular';
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
    const createUser = this.dataService.addUser(this.registerForm.value);
    if (
      !this.dataService.checkAccount(this.registerForm.value.account) &&
      createUser == null
    ) {
      let toast = this.toastCtrl.create({
        message: 'Đăng ký không thành công',
        duration: 5000,
        color: 'dark',
      });
      (await toast).present();
    } else {
      let toast = this.toastCtrl.create({
        message: 'Đăng ký thành công',
        duration: 5000,
        color: 'dark',
      });
      (await toast).present();
    }
    return await createUser;
  }
}
