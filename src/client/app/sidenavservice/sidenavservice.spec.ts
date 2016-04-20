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
import {Sidenavservice} from './sidenavservice';


describe('Sidenavservice Service', () => {

  beforeEachProviders(() => [Sidenavservice]);


  it('should ...', inject([Sidenavservice], (service: Sidenavservice) => {

  }));

});
