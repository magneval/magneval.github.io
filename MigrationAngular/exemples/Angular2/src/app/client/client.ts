import {Component} from 'angular2/core';
import {AdresseDetailComponent} from '../adresse/adresse-detail.component';
import {Adresse} from '../adresse/adresse';


@Component({
  selector: 'client',
  templateUrl: 'app///client/client.html',
  styleUrls: ['app///client/client.css'],
  providers: [],
  directives: [AdresseDetailComponent],
  pipes: []
})
export class Client {

  id: number;
  name: string;

  adresse: Adresse;

}
