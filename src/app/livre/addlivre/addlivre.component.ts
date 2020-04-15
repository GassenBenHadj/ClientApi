import { Component, OnInit, Input, Inject } from '@angular/core';
import {LivreService} from 'src/app/Services/livre.service';
import { FormControl, FormGroupDirective, FormBuilder,
  FormGroup, NgForm, Validators } from '@angular/forms';
import {Livre} from 'src/app/Model/Livre';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-addlivre',
  templateUrl: './addlivre.component.html',
  styleUrls: ['./addlivre.component.css']
})
export class AddlivreComponent implements OnInit {
  livre : Livre;
  @Input()Titre:string;
  @Input()Prix:Number;
  @Input()Taile:Number;
  Entete_Page : string = 'Traitement en cour';

  livregroup:FormGroup;
  constructor(private _service :LivreService) {
    console.log("Debut de chargement du composant");
  }

  ngOnInit() {
    if(localStorage['livreid']!=null)
    {
      this.Entete_Page='Modifier le livre';

      let id :Number = Number(localStorage['livreid']);
       console.warn('id',id);
      this._service.getEntity(id).subscribe((result: Livre)=>{
         this.livre = result;
        this.update();
       });
    }

    else{
      this.Entete_Page='Ajouter un livre';
      console.log("Chargement du composant");
      this.livre = <Livre>{};
    }
  }
  update()
  {
    this.Titre = this.livre.titre;
    this.Taile = this.livre.taille;
    this.Prix = this.livre.prix;
  }

  onSubmit()
  {
    if(localStorage['livreid']!=null)
    {
      this._service.entity= this.livre;
      console.log(this._service.entity);
      this._service.postEntity().subscribe(
        result=>{console.warn('result',result)}
      );
    }
    else{
      this._service.putEntity(this.livre).subscribe(
        result=>{
          console.log("Livre mis à jour");
        }
      );
      localStorage.setItem('livreid',null);
    }

  }

}
