/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />
/* tslint:disable:no-unused-variable */



import {
  async, inject
} from '@angular/core/testing';
import { ShoutPipe } from './shout.pipe';

describe('Pipe: Shout', () => {
  it('create an instance', () => {
    let pipe = new ShoutPipe();
    expect(pipe).toBeTruthy();
  });
});
