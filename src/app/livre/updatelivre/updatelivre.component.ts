import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {LivreService} from 'src/app/Services/livre.service';
import { Livre } from 'src/app/Model/Livre';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-updatelivre',
  templateUrl: './updatelivre.component.html',
  styleUrls: ['./updatelivre.component.css']
})
export class UpdatelivreComponent implements OnInit {
  Livres : {};
  constructor(private _service:LivreService,private _router:Router)
  {console.log('Debut du lancement du composant'); }

  ngOnInit(){
    return this._service.getEntities().subscribe(
      result =>
      {
        console.warn("data",result);
        this.Livres = this._service.entityList = result;
      });
    }


    getcurrent(livre:Livre){
        localStorage.setItem('livreid',livre.id.toString());
        if(livre)
        {
          this._router.navigateByUrl('/books/addlivre');
        }
    }

    update(current :Livre){
      this._service.putEntity(current).subscribe(
        result=>{
          console.log('Element mis à jour')
        }
      );
    }



}





