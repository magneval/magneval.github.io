import {Component, OnInit} from 'angular2/core';
import {Client} from './client';
import {ClientService} from './client.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/client/client-list.component.html',
  styleUrls: ['app/client/client-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ClientListComponent implements OnInit {
  clients: Client[];
  constructor(
    private _service: ClientService) {
      
    }
  ngOnInit() {
    this._service.getAll().then(clients => this.clients = clients);
  }
}
