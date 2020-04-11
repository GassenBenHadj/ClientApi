import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Faut ajouter ce module pour que les services fonctionnent*/
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
/*General*/
import { AppComponent } from './app.component';
import { HomeComponent } from './general/home/home.component';
import { AboutComponent } from './general/about/about.component';
import { ContactComponent } from './general/contact/contact.component';
import {NotFoundComponent} from './general/not-found/not-found.component';
import { SigninComponent } from './general/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule /*Faut ajouter ce module pour que les services fonctionnent*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
