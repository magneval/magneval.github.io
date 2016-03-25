import {Component, OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Adresse} from '../adresse/adresse';
import {AdresseDetailComponent} from '../adresse/adresse-detail.component';
import {Client} from './client';
import {ClientImpl} from './client-impl';
import {ClientService} from './client.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/client/client-detail.component.html',
  directives: [AdresseDetailComponent],
  styleUrls: ['app/client/client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, CanDeactivate {

  @Input() client: Client;
  editName: string;

  constructor(
    private _service: ClientService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { 
    }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(client => {
      if (client) {
        this.editName = client.name;
        this.client = client;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.client || this.client.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.client.name;
    this.gotoList();
  }

  save() {
    this.client.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['ClientList']);
  }
}
