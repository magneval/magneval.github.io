import {Injectable} from 'angular2/core';
import {Client} from './client';
import {ClientImpl} from './client-impl';

@Injectable()
export class ClientService {
  getAll() { return promise; }
  get(id: number) {
    return promise.then(all => all.find(e => e.id === id));
  }
}

let mock = [
  new ClientImpl(1, 'one'),
  new ClientImpl(2, 'two'),
  new ClientImpl(3, 'three')
];

let promise = Promise.resolve(mock);
