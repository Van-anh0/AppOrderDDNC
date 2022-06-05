import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {}

  gotoRegisterPage() {
    this.router.navigateByUrl('/register');
  }

  login(email, password) {
    this.authService
      .signin(email.value, password.value)
      .then((res) => {
        this.router.navigateByUrl('/bottom-tab-page');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
