/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TodoAssigneesService } from './todo-assignees.service';

describe('TodoAssignees Service', () => {
  beforeEachProviders(() => [TodoAssigneesService]);

  it('should ...',
      inject([TodoAssigneesService], (service: TodoAssigneesService) => {
    expect(service).toBeTruthy();
  }));
});
