import {  provideRouter,RouterConfig } from '@angular/router';

import { ZippyComponent }   from './zippy/zippy.component';
import { TodosComponent }   from './todos/todos.component';

export const TodoRoutes: RouterConfig = [
   
           { path:'assignee',  component: ZippyComponent },
           { path:'home',  component: TodosComponent },
   
];

export const appRouterProviders = [
  provideRouter(TodoRoutes)
];