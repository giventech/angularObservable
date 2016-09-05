import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Routes, RouterModule   } from '@angular/router';
import { FormsModule   } from '@angular/forms';
import { MdCardModule } from '@angular2-material/card'
import { MdButtonModule } from '@angular2-material/button'

import { ZippyComponent }   from './zippy/zippy.component';
import { TodosComponent }   from './todos/todos.component';
import { NewTodoComponent }   from './new-todo/new-todo.component';
import { ShoutPipe} from  './shout.pipe';
 
export const TodoRoutes: Routes = [
   
           { path:'assignee',  component: ZippyComponent },
           { path:'todo',  component: TodosComponent },
           { path:'',  component: NewTodoComponent }
    
   
];

@NgModule({
    declarations: [AppComponent,NewTodoComponent,ShoutPipe],
    imports:      [BrowserModule,
    // Router
    RouterModule.forRoot(TodoRoutes), 
    // Forms
    FormsModule, 
    // Material Design
    MdButtonModule, 
    MdCardModule, 
    ],
    bootstrap:    [AppComponent]
    
})
export class AppModule {
    
}