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
import {ClientDetailComponent} from './client-detail.component';
import {Router, RouteParams} from 'angular2/router';
import {Client} from './client';
import {ClientService} from './client.service';
import {ClientImpl} from './client-impl';

class MockClientService {
  get() { return Promise.resolve(new ClientImpl(1, 'one')); }
}

class MockRouter {
  navigate() { }
}

class MockRouteParams {
  get() { return 1; }
}

describe('ClientDetailComponent', () => {

  beforeEachProviders(() => [
    provide(ClientService, {useClass: MockClientService}),
    provide(Router, {useClass: MockRouter}),
    provide(RouteParams, {useClass: MockRouteParams}),
  ]);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(ClientDetailComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
