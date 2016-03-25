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
import {LigneDetailComponent} from './ligne-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Ligne} from './ligne';
import {LigneImpl, LigneService} from './ligne.service';

class MockLigneService {
  get() { return Promise.resolve(new LigneImpl(1, 'one',1,1,1)); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('LigneDetailComponent', () => {

  beforeEachProviders(() => [
    provide(LigneService, {useClass: MockLigneService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(LigneDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
