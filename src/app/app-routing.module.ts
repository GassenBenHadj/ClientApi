import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import {ContactComponent} from './general/contact/contact.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { AboutComponent } from './general/about/about.component';
import { SigninComponent } from './general/signin/signin.component';



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'signin',component:SigninComponent},
  {
    path: 'books', loadChildren :()=> import('./livre/livre.module')
    .then(m=>m.LivreModule)
  },
  {
    path: 'visitors',loadChildren:()=> import('./visiteur/visiteur.module')
    .then(m=>m.VisiteurModule)
  },
  {path:'**',component:NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
