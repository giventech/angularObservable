/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ShoutPipe } from './shout.pipe';

describe('Pipe: Shout', () => {
  it('create an instance', () => {
    let pipe = new ShoutPipe();
    expect(pipe).toBeTruthy();
  });
});
