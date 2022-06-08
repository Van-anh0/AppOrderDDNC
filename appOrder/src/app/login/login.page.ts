import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AppService } from '../services/app.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category, DataService } from 'src/app/services/data.service';
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
    private appService: AppService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private storageService: StorageService
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

  login() {
    console.log('Đã vào login');
    this.dataService.getUser().subscribe((result) => {
      const users = result.find((a: any) => {
        return (
          a.account === this.singInForm.value.account &&
          a.password === this.singInForm.value.password
        );
      });
      if (users) {
        this.user = users;
        this.storageService.store('users',this.user);
        this.router.navigateByUrl('/bottom-tab');
      } else {
        alert('error');
      }
    });
  }

  getCurrentUser() {
    return this.singInForm.value;
  }
}
