import { Component, OnInit, Input } from '@angular/core';
import {VisiteurService} from 'src/app/Services/visiteur.service';
import { FormControl, FormGroupDirective, FormBuilder,
  FormGroup, NgForm, Validators } from '@angular/forms';
import {Visiteur} from 'src/app/Model/visiteur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-addvisiteur',
  templateUrl: './addvisiteur.component.html',
  styleUrls: ['./addvisiteur.component.css']
})
export class AddVisiteurComponent implements OnInit {
  visiteur : Visiteur;

  visiteurgroup:FormGroup;
  constructor(private _service :VisiteurService,private _http: HttpClient) {
    console.log("Debut de chargement du composant");
  }

  ngOnInit() {
    console.log("Chargement du composant");
    this.visiteur = <Visiteur>{};
  }

  onSubmit()
  {
    this._service.entity= this.visiteur;
     console.log(this._service.entity);
     this._service.postEntity().subscribe(
       result=>{console.warn('result',result)}
     );
  }

}
