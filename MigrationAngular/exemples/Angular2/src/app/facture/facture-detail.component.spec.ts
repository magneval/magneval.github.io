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
import {FactureDetailComponent} from './facture-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Facture} from './facture';
import {FactureService} from './facture.service';

class MockFactureService {
  get() { return Promise.resolve(new Facture(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('FactureDetailComponent', () => {

  beforeEachProviders(() => [
    provide(FactureService, {useClass: MockFactureService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(FactureDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
