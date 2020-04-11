import { Injectable } from '@angular/core';
import {WebapiService} from './webapiservice.service';
import {HttpClient} from '@angular/common/http';
import { Livre } from '../Model/Livre'

@Injectable({
  providedIn: 'root'
})
export class LivreService extends WebapiService<Livre>{

  constructor(_httpclient: HttpClient) {
    super(_httpclient);
    this.template='livre';
  }
}
