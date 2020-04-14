import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    nomApplication = 'AngularClient';
    nomAuteur ='Béchir Béjaoui'
    constructor() {
    }
    ngOnInit() {
     }

  }
