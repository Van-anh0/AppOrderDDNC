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
  postData = {
    email: '',
    password: '',
  };

  

  constructor(private router: Router,
    formBuilder: FormBuilder,
    authService: AuthService) {}

  ngOnInit() {}

  gotoRegisterPage() {
    this.router.navigateByUrl('/register');
  }
}
