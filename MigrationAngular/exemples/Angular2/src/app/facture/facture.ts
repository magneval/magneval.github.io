import {Component} from 'angular2/core';
import {Client} from '../client/client';
import {Adresse} from '../adresse/adresse';


@Component({
  selector: 'facture',
  templateUrl: 'app///facture/facture.html',
  styleUrls: ['app///facture/facture.css'],
  providers: [],
  directives: [Adresse],
  pipes: []
})
export class Facture {
  client: Client;
  adresse: Adresse;

  constructor(public id: number, public name: string) { }

}
