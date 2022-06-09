import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  ret: any;
  constructor(private storage: Storage) {}

  async store(storageKey: string, value: any) {
    await this.storage.set(storageKey, value);
    console.log('sucess');
    console.log(value);
  }

  async get(storageKey: string) {
    await this.storage.get(storageKey).then((value) => {
      this.ret = value;
      console.log(value);
    });
  }

  async removeItem(strorageKey: string) {
    await this.storage.remove(strorageKey);
  }

  async clean() {
    await this.storage.clear();
  }
}
