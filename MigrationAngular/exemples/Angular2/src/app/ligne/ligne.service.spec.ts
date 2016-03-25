import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {provide} from 'angular2/core';
import {LigneService} from './ligne.service';

describe('LigneService', () => {

  beforeEachProviders(() => [LigneService]);

  it('should get all lignes', inject([LigneService], (ligneService:LigneService) => {
    ligneService.getAll().then(lignes => expect(lignes.length).toBe(3));
  }));

  it('should get one ligne', inject([LigneService], (ligneService:LigneService) => {
    ligneService.get(1).then(ligne => expect(ligne.id).toBe(1));
  }));

});
