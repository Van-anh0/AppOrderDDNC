import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, getDoc, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 
export interface Note {
  id?: string;
  title: string;
  text: string;
}

export interface Category {
  id?: string;
  nameCate: string;
  image: string;
}

export interface Table {
  id?: string;
  nameTable: string;
  status: boolean;
}

export interface FoodInfo {
  id?: string;
  nameCateId: string;
  nameCate: string;
  image: string;
  name: string;
  amount: number;
  detail: string;
  review: string;
}

export interface User{
  id?: string;
  account: string;
  name: string;
  password: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private firestore: Firestore) { }
 
  getNotes(): Observable<Note[]> {
    const notesRef = collection(this.firestore, 'notes');
    return collectionData(notesRef, { idField: 'id'}) as Observable<Note[]>;
  }

  getCategories(): Observable<Category[]> {
    const CategoryRef = collection(this.firestore, 'category');
    return collectionData(CategoryRef, { idField: 'id'}) as Observable<Category[]>;
  }

  getTables(): Observable<Table[]> {
    const TableRef = collection(this.firestore, 'tables');
    return collectionData(TableRef, { idField: 'id'}) as Observable<Table[]>;
  }

  getFoodsInfo(): Observable<FoodInfo[]> {
    const FoodInfoRef = collection(this.firestore, 'foodInfo');
    //const q = query(FoodInfoRef, where('name', '==', 'cai j do'))
    return collectionData(FoodInfoRef, { idField: 'id'}) as Observable<FoodInfo[]>;
  }

 
 
  getUser(): Observable<User[]> {
    const UserRef = collection(this.firestore, 'user');
    return collectionData(UserRef, { idField: 'id'}) as Observable<User[]>;
  }
  
  getNoteById(id): Observable<Note> {
    const noteDocRef = doc(this.firestore, `notes/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<Note>;
  }
 
  getFoodById(id): Observable<FoodInfo> {
    const foodDocRef = doc(this.firestore, `foodInfo/${id}`);
    return docData(foodDocRef, { idField: 'id' }) as Observable<FoodInfo>;
  }

  getFoodsByCate(nameCateId) : Observable<FoodInfo[]> {
    const UserRef = collection(this.firestore, `foodInfo/${nameCateId}`);
    return collectionData(UserRef, { idField: 'nameCateId'}) as Observable<FoodInfo[]>;
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