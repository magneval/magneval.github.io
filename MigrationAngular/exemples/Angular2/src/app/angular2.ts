import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FactureRoot} from './facture/facture-root.component';
import {ClientRoot} from './client/client-root.component';


@Component({
  selector: 'angular2-app',
  providers: [],
  templateUrl: 'app/angular2.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {path:'/factures/...', name: 'FactureRoot', component: FactureRoot, useAsDefault: true},
  {path:'/clients/...', name: 'ClientRoot', component: ClientRoot}

])
  //{path:'/', component: Angular2App },
export class Angular2App {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
