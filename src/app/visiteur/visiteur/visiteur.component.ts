import { Component, OnInit, Input } from '@angular/core';
import {Visiteur} from 'src/app/Model/visiteur';
import { VisiteurService } from 'src/app/Services/visiteur.service';


@Component({
  selector: 'app-livre',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css']
})
export class VisiteurComponent implements OnInit {
  @Input()id:Number;
  visiteur :Visiteur;
  constructor(private _service:VisiteurService) {
    console.log('Debut du lancement du composant');
  }

  ngOnInit(){

    }

    getVisiteur()
    {
      if(this.id==null)this.id=1;
      return this._service.getEntity(this.id).subscribe(
      (result:any) =>
      {
        console.warn("data",result);
        this.visiteur = result;
      });
    }
    updateId(updateid)
    {
       this.id = updateid;
    }
  }

