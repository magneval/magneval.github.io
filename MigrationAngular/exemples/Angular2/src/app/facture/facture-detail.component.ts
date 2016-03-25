import {Component, OnInit} from 'angular2/core';
import {Facture} from './facture';
import {FactureService} from './facture.service';
import {LigneListComponent} from '../ligne/ligne-list.component';
import {LigneService} from '../ligne/ligne.service';
import {AdresseDetailComponent} from '../adresse/adresse-detail.component';
//import {Adresse} from '../adresse/adresse';
import {Client} from '../client/client';

import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/facture/facture-detail.component.html',
  styleUrls: ['app/facture/facture-detail.component.css'],
  providers: [FactureService,LigneService],
  directives: [Facture,LigneListComponent, AdresseDetailComponent, Client]
})
export class FactureDetailComponent implements OnInit, CanDeactivate {

  facture: Facture;
  editName: string;
  errorMessage: string;

  constructor(
    private _service: FactureService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service
      .get(id)
      .subscribe(
              facture => {
      if (facture) {
        this.editName = facture.name;
        this.facture = facture;
      } else {
        this.gotoList();
      }
    },
        error =>  this.errorMessage = <any>error);
        /*
      .then(
      facture => {
      if (facture) {
        this.editName = facture.name;
        this.facture = facture;
      } else {
        this.gotoList();
      }
    });
    */
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.facture || this.facture.name === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.facture.name;
    this.gotoList();
  }

  save() {
    this.facture.name = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['FactureList']);
  }
}
