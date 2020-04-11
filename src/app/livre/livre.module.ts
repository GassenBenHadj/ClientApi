import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';

/*Livre */
import { LivresComponent } from './livres/livres.component';
import {LivreComponent} from './livre/livre.component';
import {AddlivreComponent} from './addlivre/addlivre.component';
import {UpdatelivreComponent} from './updatelivre/updatelivre.component';
import { DeletelivreComponent } from './deletelivre/deletelivre.component';
import {CountlivreComponent} from './countlivre/countlivre.component';

@NgModule({
  declarations: [
    LivresComponent,
    LivreComponent,
    AddlivreComponent,
    UpdatelivreComponent,
    DeletelivreComponent,
    CountlivreComponent
  ],
  exports:[
    LivresComponent,
    LivreComponent,
    AddlivreComponent,
    UpdatelivreComponent,
    DeletelivreComponent,
    CountlivreComponent
  ],
  imports: [
    CommonModule,
    LivreRoutingModule
  ]
})
export class LivreModule { }
