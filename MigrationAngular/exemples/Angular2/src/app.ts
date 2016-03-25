import {bootstrap} from 'angular2/platform/browser';
import {Angular2App} from './app/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(Angular2App, [
  ROUTER_PROVIDERS,HTTP_PROVIDERS
]);
