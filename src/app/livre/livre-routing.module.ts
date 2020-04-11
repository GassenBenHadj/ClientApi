import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreComponent } from './livre/livre.component';
import {LivresComponent} from './livres/livres.component';
import { AddlivreComponent } from './addlivre/addlivre.component';
import { UpdatelivreComponent } from './updatelivre/updatelivre.component';
import { DeletelivreComponent } from './deletelivre/deletelivre.component';
import { CountlivreComponent } from './countlivre/countlivre.component';

const routes: Routes = [
    {path :''
     ,children:[
      {path :'livre', component: LivreComponent},
      {path :'livres', component: LivresComponent},
      {path :'addlivre', component: AddlivreComponent},
      {path: 'updatelivre',component:UpdatelivreComponent},
      {path:'deletelivre',component:DeletelivreComponent},
      {path:'countlivre',component:CountlivreComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivreRoutingModule { }
