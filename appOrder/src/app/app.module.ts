import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {IonicStorageModule} from '@ionic/storage-angular'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


// import {AngularFireModule} from '@angular/fire/compat';
// import {AngularFireAuthModule} from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// @NgModule({
//   declarations: [AppComponent],
//   entryComponents: [],
//   imports: [BrowserModule,
//     IonicModule.forRoot(),
//     AppRoutingModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     AngularFireAuthModule,
//     AngularFireStorageModule,
//     AngularFireDatabaseModule],
//   providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    
  ],
  providers: [Storage, HttpClientModule, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
