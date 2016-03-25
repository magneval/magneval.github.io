import {Injectable} from 'angular2/core';
import {Ligne} from './ligne';

export class LigneImpl implements Ligne {
  constructor(
    public id: number,
    public libelle: string,
    public prixUnitaire:number,
    public quantite:number,
    public prixTotal:number

    ) { }
}

@Injectable()
export class LigneService {
  getAll():Promise<LigneImpl[]>  { return promise; }
  get(id: number):Promise<Ligne>  {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new LigneImpl(1, 'one',1,1,1),
  new LigneImpl(2, 'two',2,1,2),
  new LigneImpl(3, 'three',3,2,6)
];

let promise = Promise.resolve(mock);
