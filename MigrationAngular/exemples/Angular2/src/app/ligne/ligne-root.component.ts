import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {LigneListComponent} from './ligne-list.component';
import {LigneDetailComponent} from './ligne-detail.component';
import {LigneService} from './ligne.service';

@Component({
  template: `<h2>lignes</h2>
  <router-outlet></router-outlet>`,
  providers: [LigneService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'LigneList', component: LigneListComponent, useAsDefault: true},
  {path:'/:id', name: 'LigneDetail', component: LigneDetailComponent}
])
export class LigneRoot {
  constructor() {}
}
