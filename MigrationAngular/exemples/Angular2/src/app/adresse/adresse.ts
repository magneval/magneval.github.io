import {Component} from 'angular2/core';


@Component({
  selector: 'adresse',
  templateUrl: 'app///adresse/adresse.html',
  styleUrls: ['app///adresse/adresse.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Adresse {
  nom: string
  numero: number;
  rue: string
  codePostal: number;
  ville: string
  constructor() {
    
  }

}
