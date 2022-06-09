import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc,
  where,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Note {
  id?: string;
  title: string;
  text: string;
}

export interface Category {
  id?: string;
  nameCate: string;
}

export interface Table {
  id?: string;
  nameTable: string;
  status: boolean;
}

export interface FoodInfo {
  id?: string;
  nameCateId: string;
  image: string;
  name: string;
  amount: number;
  detail: string;
  review: string;
}

export interface User {
  id?: string;
  account: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }

  getCategories(): Observable<Category[]> {
    const CategoryRef = collection(this.firestore, 'category');
    return collectionData(CategoryRef, { idField: 'id' }) as Observable<
      Category[]
    >;
  }

  getTables(): Observable<Table[]> {
    const TableRef = collection(this.firestore, 'tables');
    return collectionData(TableRef, { idField: 'id' }) as Observable<Table[]>;
  }

  getFoodsInfo(): Observable<FoodInfo[]> {
    const FoodInfoRef = collection(this.firestore, 'foodInfo');
    return collectionData(FoodInfoRef, { idField: 'id' }) as Observable<
      FoodInfo[]
    >;
  }

  getUser(): Observable<User[]> {
    const UserRef = collection(this.firestore, 'user');
    return collectionData(UserRef, { idField: 'id' }) as Observable<User[]>;
  }

  async checkAccount(account: string) {
    const UserRef = await query(
      collection(this.firestore, 'user'),
      where('account', '==', account)
    );
    if (UserRef) {
      console.log(UserRef);
      return false;
    } else {
      console.log(UserRef);
      return true;
    }
  }

  addUser(user: User) {
    const userAdd = collection(this.firestore, 'user');
    return addDoc(userAdd, user);
  }

  getNoteById(id): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }

  addNote(note: Note) {
    const notesRef = collection(this.firestore, 'notes');
    return addDoc(notesRef, note);
  }

  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef, { title: note.title, text: note.text });
  }
}
