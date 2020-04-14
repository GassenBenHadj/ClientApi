import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../general/home/home.component';
import { VisiteursComponent } from './visiteurs/visiteurs.component';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { AddVisiteurComponent } from './addvisiteur/addvisiteur.component';
import { UpdatevisiteurComponent } from './updatevisiteur/updatevisiteur.component';
import { DeletevisiteurComponent } from './deletevisiteur/deletevisiteur.component';
import { CountvisiteurComponent } from './countvisiteur/countvisiteur.component';


const routes: Routes = [
{path: '' ,children:[
  {path: 'visiteurs' , component:VisiteursComponent},
  {path: 'visiteur' , component:VisiteurComponent},
  {path: 'addvisiteur' , component:AddVisiteurComponent},
  {path: 'updatevisiteur' , component:UpdatevisiteurComponent},
  {path: 'deletevisiteur', component:DeletevisiteurComponent},
  {path: 'countvisiteur', component:CountvisiteurComponent}
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisiteurRoutingModule { }
