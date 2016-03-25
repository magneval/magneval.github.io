import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ClientListComponent} from './client-list.component';
import {Client} from './client';
import {ClientService} from './client.service';
import {ClientImpl} from './client-impl';

class MockClientService {
  getAll() { return Promise.resolve([new ClientImpl(1, 'one')]); }
}

describe('ClientListComponent', () => {

  beforeEachProviders(() => [
    provide(ClientService, {useClass: MockClientService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ClientListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
