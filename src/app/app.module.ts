import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './components/products/products.component';

import {AngularFireModule} from '@angular/fire'
import {environment} from '../environments/environment'
import {AngularFirestoreModule} from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
