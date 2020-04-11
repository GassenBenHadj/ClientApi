import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisiteurRoutingModule } from './visiteur-routing.module';

/*Visiteur */
import { VisiteursComponent } from './visiteurs/visiteurs.component';
import { VisiteurComponent } from './visiteur/visiteur.component';
import { AddvisiteurComponent } from './addvisiteur/addvisiteur.component';
import { UpdatevisiteurComponent } from './updatevisiteur/updatevisiteur.component';
import { DeletevisiteurComponent } from './deletevisiteur/deletevisiteur.component';
import { CountvisiteurComponent } from './countvisiteur/countvisiteur.component';


@NgModule({
  declarations: [
    VisiteursComponent,
    VisiteurComponent,
    AddvisiteurComponent,
    DeletevisiteurComponent,
    UpdatevisiteurComponent,
    CountvisiteurComponent
  ],
  imports: [
    CommonModule,
    VisiteurRoutingModule
  ]
})
export class VisiteurModule { }
