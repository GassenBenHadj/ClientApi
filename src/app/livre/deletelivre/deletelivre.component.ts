import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {LivreService} from 'src/app/Services/livre.service';
import { Livre } from 'src/app/Model/Livre';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-deletelivre',
  templateUrl: './deletelivre.component.html',
  styleUrls: ['./deletelivre.component.css']
})
export class DeletelivreComponent implements OnInit {
  Livres : {};
  constructor(private _service:LivreService)
   {console.log('Debut du lancement du composant'); }

  ngOnInit(){
    return this._service.getEntities().subscribe(
      result =>
      {
        console.warn("data",result);
        this.Livres = this._service.entityList = result;
      });
    }

    updateUser(current :Livre){
      this._service.putEntity(current);
    }


    erase(livre:Livre){
       this._service.entity = livre;
       this._service.deleteEntity().subscribe(
         result => {
           console.log('Element supprimé');
         }
       );
    }
}
