import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {FactureListComponent} from './facture-list.component';
import {FactureDetailComponent} from './facture-detail.component';
import {FactureService} from './facture.service';
import {LigneDetailComponent} from '../ligne/ligne-detail.component';
import {LigneListComponent} from '../ligne/ligne-list.component';
import {LigneService} from '../ligne/ligne.service';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'FactureList', component: FactureListComponent, useAsDefault: true},
  {path:'/:id', name: 'FactureDetail', component: FactureDetailComponent}
//  {path:'/:id/ligne/:idLigne', name: 'LigneDetail', component: LigneDetailComponent}
])
export class FactureRoot {
  constructor() {}
}
