import { Injectable, Component, OnInit } from '@angular/core';
import {VisiteurService} from 'src/app/Services/visiteur.service';
import { Visiteur } from 'src/app/Model/visiteur';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-deletevisiteur',
  templateUrl: './deletevisiteur.component.html',
  styleUrls: ['./deletevisiteur.component.css']
})
export class DeletevisiteurComponent implements OnInit {
  Visiteurs :{};
  constructor(private _service:VisiteurService) {
    console.log("Debut du lancement du composant");
   }

   ngOnInit(){
    return this._service.getEntities().subscribe(
      result =>
      {
        console.warn("data",result);
        this.Visiteurs = this._service.entityList = result;
      });
    }

    erase(visiteur:Visiteur){
       this._service.entity = visiteur;
       this._service.deleteEntity().subscribe(
         result =>{
              console.log('Visiteur supprimé')
         });

    }
}
