import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import {Todo} from '../todo';
import {ShoutPipe} from  '../shout.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  pipes: [ShoutPipe]
})
export class TodosComponent implements OnInit {
    // For dependency injection
    todos:Todo[];
    constructor(private todoService:TodosServiceService) {
      
    }
 
  // Insert initialisation code here
  // ngOnInit() {

  //   this.todos = this.todoService.getTodos();
  // }

   ngOnInit() {

     this.todoService.getTodos().subscribe(ajaxTodos => {
       this.todos = ajaxTodos;
     });
  }

}
