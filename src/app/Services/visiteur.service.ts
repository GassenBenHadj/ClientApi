import { Injectable } from '@angular/core';
import {WebapiService} from './webapiservice.service';
import {HttpClient} from '@angular/common/http';
import { Visiteur } from '../Model/visiteur';

@Injectable({
  providedIn: 'root'
})
export class VisiteurService extends WebapiService<Visiteur>{

  constructor(_httpclient: HttpClient) {
    super(_httpclient);
    this.template='visiteur';
  }
}
