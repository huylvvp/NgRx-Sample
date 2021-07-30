import { createSelector, createFeatureSelector } from "@ngrx/store";

import { Todo } from '../../Models/todo';
import { AppState } from "../app.state";
import { todosAdapter, TodosState } from "../todo.state";

export const TODOS_STATE_NAME = 'todos';
const getTodosState = createFeatureSelector<TodosState>("todos");

export const todosSelectors = todosAdapter.getSelectors();


export const selectTodos = createSelector(
  getTodosState,
  todosSelectors.selectAll
)


export const selectTodosByCompleted = (is_completed: boolean) => createSelector(
  selectTodos,
  (todos) => 
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
  (todos: Todo[],{id}) =>
    todos.filter((todo) => todo.id === Number(id))[0]
)
