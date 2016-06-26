/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TodosComponent } from './todos.component';

describe('Component: Todos', () => {
beforeEachProviders(() => [TodosServiceService]);
  it('should ...call the service',
       inject([TodosServiceService], (todoService: TodosServiceService) => {
     expect(todoService).toBeTruthy();
      it('should create an instance', () => {
    let component = new TodosComponent(todoService);
    expect(component).toBeTruthy();
  });

  }));
 
});
