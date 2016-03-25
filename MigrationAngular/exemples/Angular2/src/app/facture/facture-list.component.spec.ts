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
import {FactureListComponent} from './facture-list.component';
import {Facture} from './facture';
import {FactureService} from './facture.service';

class MockFactureService {
  getAll() { return Promise.resolve([new Facture(1, 'one')]); }
}

describe('FactureListComponent', () => {

  beforeEachProviders(() => [
    provide(FactureService, {useClass: MockFactureService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(FactureListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
