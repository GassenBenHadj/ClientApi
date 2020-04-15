import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {LivreService} from 'src/app/Services/livre.service';
import { Livre } from 'src/app/Model/Livre';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  Livres : {};
  constructor(private _service:LivreService) {
    console.log('Debut du lancement du composant');
  }
  ngOnInit(){
     return this._service.getEntities().subscribe(
        result =>
        {
          console.warn("data",result);
          this.Livres = this._service.entityList = result;
        });
      }

  }
