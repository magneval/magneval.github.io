import {Injectable} from 'angular2/core';
import {Facture} from './facture';
import {Http, Response} from 'angular2/http';
//import {Jsonp, URLSearchParams} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FactureService {
  private _facturesUrl = 'api/factures.json';  // URL to web api
  constructor (private http: Http) {}

  getAll():Observable<Facture[]> { 
  //getAll():Promise<Facture[]> { 
    return this.http.get(this._facturesUrl)
                    .map(
                      res => <Facture[]> res
                      .json()
                        .data
                    )
                    //.toPromise();
                    .do(
                      data => console.log(data)
                    ) // eyeball results in the console
                    .catch(this.handleError);
                    
  }
  private handleError (error: any) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
//    return Promise.reject(error.message || error.json().error || 'Server error');
  }
  get(id: number):Observable<Facture> {
    //return this.getAll().then(all => all.find(e => e.id === id));
    return this.getAll().map(all => all.find(e => e.id === id));
  }
}

let mock = [
  new Facture(1, 'one'),
  new Facture(2, 'two'),
  new Facture(3, 'three')
];

//let promise = Promise.resolve(mock);
