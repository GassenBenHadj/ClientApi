import { Component, OnInit,Injectable,Input } from '@angular/core';
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
  @Input()id:Number;
  livre :Livre;
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

    erase(livre:Livre)
    {
      alert("Vous ête sûr de bien vouloir supprimer le livre!!!");
      this._service.entity = livre;
      this._service.deleteEntity().subscribe(
        result =>{
          console.log('Visiteur supprimé')
        }
      );
    }


}
