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
import {ResService} from './res-service';


describe('ResService Service', () => {

  beforeEachProviders(() => [ResService]);


  it('should ...', inject([ResService], (service: ResService) => {

  }));

});
