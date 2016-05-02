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
import {SliderService} from './slider-service';


describe('SliderService Service', () => {

  beforeEachProviders(() => [SliderService]);


  it('should ...', inject([SliderService], (service: SliderService) => {

  }));

});
