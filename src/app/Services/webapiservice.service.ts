import { Injectable, SystemJsNgModuleLoaderConfig, Type } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WebapiService<T> {

  entity: T;
  entityList : {};
  basicUrl: string;
  params: HttpParams
  router : Router;
  template :string;
  constructor(protected _http : HttpClient) {
    console.log('Création de l\'instance de service');
    this.params = new HttpParams();
  }

  private initUrl()
  {
    this.basicUrl = 'http://localhost:5002/' + this.template + '/';
  }

  getEntities<T>(): Observable<T[]>{
    this.initUrl();
     return this._http.get<T[]>(this.basicUrl + 'getall');
  }
  getEntity<T>(id: number): Observable<T>{
    this.initUrl();
    return this._http.get<T>(this.basicUrl + 'find/' + id.toString())
      .pipe(catchError(this.handleError));
  }
  postEntity<T>():Observable<T>{
    this.initUrl();
    return this._http.post<T>(this.basicUrl + 'add/', this.entity)
    .pipe(catchError(this.handleError));;
  }
  putEntity<T>(): Observable<T>{
    this.initUrl();
    return this._http.put<T>(this.basicUrl + 'update/', this.entity,{})
    .pipe(catchError(this.handleError));
  }
  deleteEntity<T>(): Observable<T>{
    this.initUrl();
    return this._http.delete<T>(this.basicUrl + 'remove/' , this.entity)
    .pipe(catchError(this.handleError));;
  }
  getcountEntity<T>(): Observable<T>{
    return this._http.get<T>(this.basicUrl + 'count')
    .pipe(catchError(this.handleError));;
  }
  getEntityPage<T>(index:number,size:number): Observable<T>{
    this.initUrl();
    this.params.getAll(this.router.url)
    return this._http.get<T>(this.basicUrl + 'page/',{params:this.params})
    .pipe(catchError(this.handleError));;
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
}

