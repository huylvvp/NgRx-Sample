import { createSelector, createFeatureSelector } from "@ngrx/store";

import { Todo } from '../../Models/todo';
import { AppState } from "../app.state";


// chi lay phan tu todo co complete = false
export const selectTodos = createSelector(
  (state: AppState) => state.todos.todos,
  (todos: ReadonlyArray<Todo>) =>
    todos.filter(todo => !todo.complete)
)

const routeParams = createSelector(
  (state: AppState) => state.router.state,
  (state) => state.params
);

// for todo detail
export const todo = createSelector(
  selectTodos,
  routeParams,
  (todos: ReadonlyArray<Todo>,{id}) =>
    todos.filter((todo) => todo.id === Number(id))[0]
)
