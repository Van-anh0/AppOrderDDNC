import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(public router: Router, public authService: AuthService) {}

  ngOnInit() {}

  gotoLoginPage() {
    this.router.navigateByUrl('/login');
  }

  signUp(email, password) {
    this.authService
      .register(email.value, password.value)
      .then((res) => {
        alert('success');
        this.router.navigateByUrl('/login');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  
}
