/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TodosServiceService } from './todos-service.service';

describe('TodosService Service', () => {
  beforeEachProviders(() => [TodosServiceService]);

  it('should ...',
      inject([TodosServiceService], (service: TodosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
