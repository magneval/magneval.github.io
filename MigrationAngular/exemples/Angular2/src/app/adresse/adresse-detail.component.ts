import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Adresse} from './adresse';


@Component({
  selector: 'adresse',
  templateUrl: 'app///adresse/adresse.html',
  styleUrls: ['app///adresse/adresse.css'],
  providers: [],
  directives: [],
  pipes: []

})
export class AdresseDetailComponent {
  @Input() adresse: Adresse;

  constructor() {
    
  }

}
