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
import {LigneListComponent} from './ligne-list.component';
import {Ligne} from './ligne';
import {LigneImpl, LigneService} from './ligne.service';

class MockLigneService {
  getAll() { return Promise.resolve([new LigneImpl(1, 'one',1,1,1)]); }
}

describe('LigneListComponent', () => {

  beforeEachProviders(() => [
    provide(LigneService, {useClass: MockLigneService}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(LigneListComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
