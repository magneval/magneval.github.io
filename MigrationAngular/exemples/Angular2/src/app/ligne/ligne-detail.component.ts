import {Component, OnInit} from 'angular2/core';
import {Ligne} from './ligne';
import {LigneService} from './ligne.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
  templateUrl: 'app/ligne/ligne-detail.component.html',
  providers: [LigneService],
  styleUrls: ['app/ligne/ligne-detail.component.css']
})
export class LigneDetailComponent implements OnInit, CanDeactivate {

  ligne: Ligne;
  editName: string;

  constructor(
    private _service: LigneService,
    private _router: Router,
    private _routeParams: RouteParams
    ) { }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._service.get(id).then(ligne => {
      if (ligne) {
        this.editName = ligne.libelle;
        this.ligne = ligne;
      } else {
        this.gotoList();
      }
    });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
    if (!this.ligne || this.ligne.libelle === this.editName) {
      return true;
    }

    return new Promise<boolean>((resolve, reject) => resolve(window.confirm('Discard changes?')));
  }

  cancel() {
    this.editName = this.ligne.libelle;
    this.gotoList();
  }

  save() {
    this.ligne.libelle = this.editName;
    this.gotoList();
  }

  gotoList() {
    this._router.navigate(['LigneList']);
  }
}
