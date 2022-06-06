import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FetchAPIService } from '../api/fetch-api.service';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = 'http://localhost:4200/api';

  constructor(private fetchAPI: FetchAPIService, private router: Router, private StorageService: StorageService) {}
  
  async login(postData: any): Promise<boolean>{
    let check = true;
    this.StorageService.clear();
    await this.fetchAPI.post('/users/login', postData).then(
      (res) => {
        if (res.status === 200) {
          this.StorageService.store('users', res);
        } else {
          check = false;
        }
      }
    );
    return check;
  }
}
