import {Component, OnInit} from 'angular2/core';
import {Facture} from './facture';
import {FactureService} from './facture.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  templateUrl: 'app/facture/facture-list.component.html',
  styleUrls: ['app/facture/facture-list.component.css'],
  providers: [FactureService],
  directives: [ROUTER_DIRECTIVES]
})
export class FactureListComponent implements OnInit {
  factures: Facture[];
  errorMessage: string;

  constructor(private _service: FactureService) {}
    
  ngOnInit() {
    this._service
      .getAll()
      .subscribe(
        factures => this.factures = factures,
        error =>  this.errorMessage = <any>error);
      ///.then(factures => this.factures = factures);
  }
}
