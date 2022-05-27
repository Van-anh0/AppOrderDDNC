import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import {AppService} from '../services/app.service';
import {FormGroup, FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  public singInForm !: FormGroup;
  user:any = []
  constructor(private router: Router, 
    public loadingController: LoadingController,
    private appService: AppService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.singInForm = this.formBuilder.group({
      account: [''],
      password: ['']
    })
  }

  gotoRegisterPage(){
    this.router.navigateByUrl('/register')
  }

  gotoHome(){
    this.router.navigateByUrl('/bottom-tab')
  }
  
  login(){
    console.log('Đã vào login');
    this.appService.getAllUsers().subscribe(result => {
      const users = result.find((a: any) =>{
        return a.account === this.singInForm.value.account && a.password === this.singInForm.value.password
      });
      if(users){
        this.router.navigateByUrl('/bottom-tab');
      }
      else{
        alert('error');
      }
    })
  }

  getCurrentUser(){
    return this.singInForm.value;
  }
}
