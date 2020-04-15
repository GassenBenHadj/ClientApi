import { Component, OnInit, Input } from '@angular/core';
import {VisiteurService} from 'src/app/Services/visiteur.service';
import {Visiteur} from 'src/app/Model/visiteur';
@Component({
  selector: 'app-addvisiteur',
  templateUrl: './addvisiteur.component.html',
  styleUrls: ['./addvisiteur.component.css']
})
export class AddVisiteurComponent implements OnInit {
  visiteur : Visiteur;
  @Input()Nom:string;
  Entete_Page : string = 'Traitement en cour';


  constructor(private _service :VisiteurService) {
    console.log("Debut de chargement du composant");
  }

  ngOnInit() {
    if(localStorage['livreid']!=null)
    {
      this.Entete_Page='Modifier le visiteur';

      let id :Number = Number(localStorage['visiteurid']);
       console.warn('id',id);
      this._service.getEntity(id).subscribe((result: Visiteur)=>{
         this.visiteur = result;
        this.update();
       });
    }
    this.visiteur = <Visiteur>{};
  }

  update()
  {
    this.Nom = this.visiteur.nom;
  }

  onSubmit()
  {
    if(localStorage['visiteurid']!=null)
    {
      this._service.entity= this.visiteur;
      console.log(this._service.entity);
      this._service.postEntity().subscribe(
        result=>{console.warn('result',result)}
      );
    }
    else{
      this._service.putEntity(this.visiteur).subscribe(
        result=>{
          console.log("Visiteur mis à jour");
        }
      );
      localStorage.setItem('visiteurid',null);
    }

  }

}
