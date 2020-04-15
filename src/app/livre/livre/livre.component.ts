import { Component, OnInit, Input,Injectable } from '@angular/core';
import {Livre} from 'src/app/Model/Livre';
import { LivreService } from 'src/app/Services/livre.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  @Input()id:Number;
  livre :Livre;
  constructor(private _service:LivreService) {
    console.log('Debut du lancement du composant');
  }

  ngOnInit(){

    }

    getLivre()
    {
      if(this.id==null)this.id=1;
      return this._service.getEntity(this.id).subscribe(
      (result:any) =>
      {
        console.warn("data",result);
        this.livre = result;
      });
    }
    updateId(updateid)
    {
       this.id = updateid;
    }
  }
