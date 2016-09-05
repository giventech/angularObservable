/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />
/* tslint:disable:no-unused-variable */

import {
  
  async, inject,TestBed
} from '@angular/core/testing';
import { AppComponent } from './app.component';
 TestBed.configureTestingModule({
    providers: [ AppComponent ]
  });


describe('App: MyAppFg', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.newTitle).toEqual('app works!');
  }));
});
