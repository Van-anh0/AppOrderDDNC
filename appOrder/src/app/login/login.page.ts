import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  postData = {
    email: '',
    password: '',
  };

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  ngOnInit() {}

  gotoRegisterPage() {
    this.router.navigateByUrl('/register');
  }

  validation() {
    const email = this.postData.email.trim();
    const password = this.postData.password.trim();
    return (
      this.postData.email &&
      this.postData.password &&
      email.length > 0 &&
      password.length > 0
    );
  }

  public async login() {
    this.postData.email = this.loginForm.get('email').value;
    this.postData.password = this.loginForm.get('password').value;
    if (this.validation()) {
      this.authService.login(this.loginForm.value).then(async (res: any) => {
        if (res) {
          console.log(this.loginForm.value);
          this.router.navigateByUrl('/bottom-tab-page');
        }
      });
    } else {
      console.log('Sai mat khau');
    }
  }
}
