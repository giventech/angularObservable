import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import {Todo} from '../todo';
import {ShoutPipe} from  '../shout.pipe';
import {Observable} from  'rxjs/Rx';
import {NewTodoComponent} from  '../new-todo';
import {ZippyComponent} from  '../zippy';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  pipes: [ShoutPipe],
  directives:[NewTodoComponent,ZippyComponent,ROUTER_DIRECTIVES]

})
export class TodosComponent implements OnInit {
    // For dependency injection
    todos$:Observable<Todo[]>;
    constructor(private todoService:TodosServiceService,
                private todoRouter: Router) {
      
    }
   
 
  // Insert initialisation code here
  // ngOnInit() {

  //   this.todos = this.todoService.getTodos();
  // }

   ngOnInit() {
      const ajaxResponse$ = this.todoService.getTodos();
      const delayedValues$ = ajaxResponse$.delay(2000);
       this.todos$ = delayedValues$;
  }

}
