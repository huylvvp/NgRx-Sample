import { createSelector, createFeatureSelector } from "@ngrx/store";

import { Todo } from '../../Models/todo';
import { AppState } from "../app.state";

export const selectTodos = createSelector(
  (state: AppState) => state.todos.todos,
  (todos: ReadonlyArray<Todo>) =>
    todos.filter(todo => !todo.complete)
)

const routeParams = createSelector(
  (state: AppState) => state.router.state,
  (state) => state.params
);

export const todo = createSelector(
  selectTodos,
  routeParams,
  (todos: ReadonlyArray<Todo>,{id}) =>
    todos.filter((todo) => todo.id === Number(id))[0]
)


