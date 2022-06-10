import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc, getDoc, query, where } from '@angular/fire/firestore';
=======
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  updateDoc,
  where,
  query,
  DocumentReference,
  DocumentData
} from '@angular/fire/firestore';
>>>>>>> 3f041d66854a43b22f8c0474dde9cce7a2be6157
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
  nameCate: string;
  amount: number;
  detail: string;
  review: number;
}

export interface User {
  id?: string;
  account: string;
  name: string;
  password: string;
}
export interface Order {
  id?: string;
  foods: {
    food: string;
    amount: number;
  }[];
  tableId?: string;
  userId: string;
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
    //const q = query(FoodInfoRef, where('name', '==', 'cai j do'))
    return collectionData(FoodInfoRef, { idField: 'id'}) as Observable<FoodInfo[]>;
  }

 
 
  getUser(): Observable<User[]> {
    const UserRef = collection(this.firestore, 'user');
    return collectionData(UserRef, { idField: 'id' }) as Observable<User[]>;
  }
  async getUserById(id){
    const noteDocRef = doc(this.firestore, `user/${id}`);
    return docData(noteDocRef, { idField: 'id' }) as Observable<User>;
  }

  async checkAccountExists(account: string) {
    const userRef = await getDocs(
      query( collection(this.firestore, 'user'),where('account', '==', account)));
    if (userRef.empty) {
      return false;
    } else {
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
<<<<<<< HEAD
 
  getFoodById(id): Observable<FoodInfo> {
    const foodDocRef = doc(this.firestore, `foodInfo/${id}`);
    return docData(foodDocRef, { idField: 'id' }) as Observable<FoodInfo>;
  }

  getFoodsByCate(nameCateId) : Observable<FoodInfo[]> {
    const UserRef = collection(this.firestore, `foodInfo/${nameCateId}`);
    return collectionData(UserRef, { idField: 'nameCateId'}) as Observable<FoodInfo[]>;
  }
=======
>>>>>>> 3f041d66854a43b22f8c0474dde9cce7a2be6157

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
  async createOrder(tableId = 0){
    const user =JSON.parse(localStorage.getItem('user')) as User;
    const rs =await addDoc(collection(this.firestore, 'order'),
      {foods: [], userId: user.id, tableId,}
    );
    localStorage.setItem('order', rs.id);
    console.log('tao order');
    setTimeout(()=>localStorage.removeItem('order'), 1000*60*10);
    return rs;
  }
  async findOrderById(id: string) {
    return await doc(this.firestore, `order/${id}`);
  }
  async addFoodToOrder(food: string ,amount: number = 1){
    let orderRef = await this.findOrderById(localStorage.getItem('order'));
    if(!localStorage.getItem('order')){orderRef = await this.createOrder();};
    const orderData = (await (await getDoc(orderRef)).data()) as Order;
    const index = orderData.foods.findIndex(e => e.food === food);
    if(index === -1){
      orderData.foods.push({food, amount});
    } else {
      const ci = orderData.foods[index];
      orderData.foods[index]={...ci, amount: ci.amount+amount};
    }
    console.log('them mon');
    console.log(orderData);
    await updateDoc(orderRef, {...orderData} );
  }
  async removeFoodToOrder(food: string){
    let orderRef = await this.findOrderById(localStorage.getItem('order'));
    if(!localStorage.getItem('order')){orderRef = await this.createOrder();};
    const orderData = (await (await getDoc(orderRef)).data()) as Order;
    const newFoods = orderData.foods.filter(i => i.food !== food);
    orderData.foods = [...newFoods];
    await updateDoc(orderRef, {...orderData});
  }
  async getOrder(){
    let orderRef = await this.findOrderById(localStorage.getItem('order'));
    if(!localStorage.getItem('order')){orderRef = await this.createOrder();};
    if(!orderRef){orderRef = await this.createOrder();};
    return (await (await getDoc(orderRef)).data()) as Order;
  }
}
