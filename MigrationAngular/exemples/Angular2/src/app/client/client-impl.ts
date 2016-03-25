import {Component} from 'angular2/core';
import {Adresse} from '../adresse/adresse';
import {Client} from './client';


@Component({
  selector: 'client',
  templateUrl: 'app///client/client.html',
  styleUrls: ['app///client/client.css'],
  providers: [],
  directives: [Adresse],
  pipes: []
})
export class ClientImpl implements Client{

  adresse: Adresse;

  constructor(public id: number, public name: string) {
  }

}
