import { Injectable } from '@angular/core';
import { Http, HttpResponse } from '@capacitor-community/http';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root',
})
export class FetchAPIService {
  apiURL = 'https://appddnc.herokuapp.com/api';

  constructor() {}

  findAll(urls: string): Promise<HttpResponse> {
    const options = {
      url: `${this.apiURL + urls}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return Http.get(options);
  }

  post(urls: string, o: object): Promise<HttpResponse> {
    const options = {
      url: `${this.apiURL + urls}`,
      data: o,
      headers: { 'Content-Type': 'application/json' },
    };
    return Http.post(options);
  }
}
