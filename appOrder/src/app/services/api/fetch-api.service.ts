import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root',
})
export class FetchAPIService {
  apiURL = 'https://appddnc.herokuapp.com/api';

  constructor() {}
}
