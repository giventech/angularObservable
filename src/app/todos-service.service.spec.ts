/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />
/* tslint:disable:no-unused-variable */

import {
 
  async, inject,TestBed
} from '@angular/core/testing';
import { TodosServiceService } from './todos-service.service';

describe('TodosService Service', () => {
  TestBed.configureTestingModule({
    providers: [ TodosServiceService ]
  });


  it('should ...',
      inject([TodosServiceService], (service: TodosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
