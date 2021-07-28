import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../Store/app.state';
import { todo } from '../Store/Selectors/todo.selectors';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo$ = this.store.pipe(select(todo));
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
