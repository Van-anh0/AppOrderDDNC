import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private auth: Auth
  ) {}

  async register({email, password}){
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return user;
  }

}
