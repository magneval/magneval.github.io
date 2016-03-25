import {Component} from 'angular2/core';


//@Component({
  //selector: 'ligne',
  //templateUrl: 'app///ligne/ligne.html',
  //styleUrls: ['app///ligne/ligne.css'],
  //providers: [],
  //directives: [],
  //pipes: []
//})
export interface Ligne {
  id:number,
  libelle:string,
  prixUnitaire:number,
  quantite:number,
  prixTotal:number
}
