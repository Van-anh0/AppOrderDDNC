import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FetchAPIService } from '../api/fetch-api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fetchAPI: FetchAPIService, private router: Router) {}
  apiURL = 'https://appddnc.herokuapp.com/api';
  
}
