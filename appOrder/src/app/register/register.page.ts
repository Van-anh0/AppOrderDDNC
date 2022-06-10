import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public registerForm !: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      account: [''],
      password: [''],
      name: ['']
    })
  }

  gotoLoginPage(){
    this.router.navigateByUrl('/login')
  }

  register(){
    this.http.post<any>('http://localhost:3000/users', this.registerForm.value).subscribe(res => {
      this.registerForm.reset();
      this.router.navigateByUrl('/login');
      alert('Success');
    },
    err => {
      alert('Failed')
    })
  }
}
