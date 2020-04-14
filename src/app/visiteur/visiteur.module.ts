import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisiteurRoutingModule } from './visiteur-routing.module';

/*Visiteur */
import { VisiteursComponent } from './visiteurs/visiteurs.component';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { AddVisiteurComponent } from './addvisiteur/addvisiteur.component';
import { UpdatevisiteurComponent } from './updatevisiteur/updatevisiteur.component';
import { DeletevisiteurComponent } from './deletevisiteur/deletevisiteur.component';
import { CountvisiteurComponent } from './countvisiteur/countvisiteur.component';


@NgModule({
  declarations: [
    VisiteursComponent,
    VisiteurComponent,
    AddVisiteurComponent,
    DeletevisiteurComponent,
    UpdatevisiteurComponent,
    CountvisiteurComponent
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule,
    FormsModule
  ]
})
export class VisiteurModule { }
