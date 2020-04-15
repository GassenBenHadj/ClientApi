import { Injectable, Component, OnInit } from '@angular/core';
import {VisiteurService} from 'src/app/Services/visiteur.service';
import { Visiteur } from 'src/app/Model/visiteur';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-updatevisiteur',
  templateUrl: './updatevisiteur.component.html',
  styleUrls: ['./updatevisiteur.component.css']
})
export class UpdatevisiteurComponent implements OnInit {
  Visiteurs :{};
  constructor(private _service:VisiteurService,private _router:Router) {
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

    getcurrent(visiteur:Visiteur){
      localStorage.setItem('visiteurid',visiteur.id.toString());
      if(visiteur)
      {
        this._router.navigateByUrl('/visitors/addvisiteur');
      }
  }


    update(visiteur:Visiteur){
      this._service.entity = visiteur;
      this._service.putEntity(visiteur).subscribe(
        result =>{
             console.log('Visiteur supprimé')
        });

   }
}
