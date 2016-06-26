import { Component, ViewEncapsulation } from '@angular/core';
import {TodosComponent} from './todos';
import {TodosServiceService} from './todos-service.service';
import {ShoutPipe} from  './shout.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [TodosComponent],
  providers: [TodosServiceService],
  //encapsulation: ViewEncapsulation.None,
  styleUrls: ['app.component.css'],
  pipes:[ShoutPipe]
})
export class AppComponent {
  newTitle = 'app works!';
  doSomething() {
    var title =  'test';
    this.newTitle =  'new value';

  }
}
