import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {LiveresApp} from '../app/liveres';

beforeEachProviders(() => [LiveresApp]);

describe('App: Liveres', () => {
  it('should have the `defaultMeaning` as 42', inject([LiveresApp], (app: LiveresApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([LiveresApp], (app: LiveresApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

