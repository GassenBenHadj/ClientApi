
import { Injectable, Component, OnInit } from '@angular/core';
import {VisiteurService} from 'src/app/Services/visiteur.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-visiteurs',
  templateUrl: './visiteurs.component.html',
  styleUrls: ['./visiteurs.component.css']
})
export class VisiteursComponent implements OnInit {
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
  }
