import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ClientService} from './client.service';

describe('ClientService', () => {

  beforeEachProviders(() => [ClientService]);

  it('should get all clients', inject([ClientService], (clientService:ClientService) => {
    clientService.getAll().then(clients => expect(clients.length).toBe(3));
  }));

  it('should get one client', inject([ClientService], (clientService:ClientService) => {
    clientService.get(1).then(client => expect(client.id).toBe(1));
  }));

});
