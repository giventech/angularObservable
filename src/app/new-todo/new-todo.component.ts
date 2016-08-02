import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-new-todo',
  templateUrl: 'new-todo.component.html',
  styleUrls: ['new-todo.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
export class NewTodoComponent implements OnInit {
  myForm:FormGroup; 
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.myForm =  this.formBuilder.group({
      todoTitle:['',Validators.required] 
    });
  }

}
