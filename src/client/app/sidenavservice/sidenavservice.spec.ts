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
import {SidenavService} from './sidenavservice';


describe('Sidenavservice Service', () => {

  beforeEachProviders(() => [SidenavService]);


  it('should ...', inject([SidenavService], (service: SidenavService) => {

  }));

});
