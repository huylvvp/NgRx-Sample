import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../Store/app.state';
import { Todo } from '../Models/todo';
import { getTodos } from '../Store/Actions/todo.actions';
import { selectTodos } from '../Store/Selectors/todo.selectors';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Output() onEditTodo: EventEmitter<Todo> = new EventEmitter();
  todos$: Observable<ReadonlyArray<Todo>> = this.store.select(selectTodos);
  constructor(
    private store: Store<AppState>) {

  }

  ngOnInit() {
    // this.getTodos();
  }

  edit(todo:Todo) {
    console.log(todo);
    this.onEditTodo.emit(todo);    
    console.log("edit")
  }
  // getTodos() {
  //   this.store.dispatch(getTodos());
  // }
}

