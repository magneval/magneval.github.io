import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {FactureService} from './facture.service';

describe('FactureService', () => {

  beforeEachProviders(() => [FactureService]);

  it('should get all factures', inject([FactureService], (factureService:FactureService) => {
    factureService
      .getAll()
      .subscribe(
        factures => expect(factures.length).toBe(3));
//      .then(factures => expect(factures.length).toBe(3));
  }));

  it('should get one facture', inject([FactureService], (factureService:FactureService) => {
    factureService
      .get(1)
      .subscribe(
        facture => expect(facture.id).toBe(1));
      //.then(facture => expect(facture.id).toBe(1));
  }));

});
