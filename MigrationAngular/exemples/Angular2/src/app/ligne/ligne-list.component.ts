import {Component, OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Ligne} from './ligne';
import {LigneService} from './ligne.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'ligne-list',
  templateUrl: 'app/ligne/ligne-list.component.html',
  styleUrls: ['app/ligne/ligne-list.component.css'],
  directives: [ROUTER_DIRECTIVES]
  //inputs: ['lignes']
})
export class LigneListComponent
//implements OnInit
{
  @Input() lignes: Ligne[];
  selectedLigne: Ligne;
  onSelect(ligne: Ligne) {
     if(ligne === this.selectedLigne) {
      this.edit(ligne);
     } else {
       this.selectedLigne = ligne;
    }
  }
  edit(ligne: Ligne) { console.log(ligne); }
  constructor(
    //private _service: LigneService
  ) {}
  //ngOnInit() {
    //this._service.getAll().then(lignes => this.lignes = lignes);
  //}
}
