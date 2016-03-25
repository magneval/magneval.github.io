import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2App} from '../app/angular2';

beforeEachProviders(() => [Angular2App]);

describe('App: Angular2', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2App], (app: Angular2App) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2App], (app: Angular2App) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

