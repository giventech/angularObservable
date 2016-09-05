/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />
/* tslint:disable:no-unused-variable */

import {
  async, inject,TestBed
} from '@angular/core/testing';
import { TodoAssigneesService } from './todo-assignees.service';

describe('TodoAssignees Service', () => {
  TestBed.configureTestingModule({
    providers: [ TodoAssigneesService ]
  });
  

  it('should ...',
      inject([TodoAssigneesService], (service: TodoAssigneesService) => {
    expect(service).toBeTruthy();
  }));
});
