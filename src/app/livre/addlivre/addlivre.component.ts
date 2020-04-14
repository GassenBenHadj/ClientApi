import { Component, OnInit, Input } from '@angular/core';
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

  livregroup:FormGroup;
  constructor(private _service :LivreService,private _http: HttpClient) {
    console.log("Debut de chargement du composant");
  }

  ngOnInit() {
    console.log("Chargement du composant");
    this.livre = <Livre>{};
  }

  onSubmit()
  {
    this._service.entity= this.livre;
     console.log(this._service.entity);
     this._service.postEntity().subscribe(
       result=>{console.warn('result',result)}
     );
  }

}
