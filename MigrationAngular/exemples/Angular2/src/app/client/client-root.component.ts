import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {ClientListComponent} from './client-list.component';
import {ClientDetailComponent} from './client-detail.component';
import {ClientService} from './client.service';

@Component({
  template: '<router-outlet></router-outlet>',
  providers: [ClientService],
  directives: [RouterOutlet]
})
@RouteConfig([
  {path:'/', name: 'ClientList', component: ClientListComponent, useAsDefault: true},
  {path:'/:id', name: 'ClientDetail', component: ClientDetailComponent}
])
export class ClientRoot {
  constructor() {}
}
