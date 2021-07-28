import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    // throw new Error('Method not implemented.');
    return {
      todos: this.mockTodos()
    }
  }
  

  private mockTodos() {
    const todo1 = new Todo(
      "Do homework",
      false
    )
    todo1.id = 0;
    const todo2 = new Todo(
      "Do exercises",
      false
    )
    todo2.id = 1;
    return [todo1, todo2]
  }
}
