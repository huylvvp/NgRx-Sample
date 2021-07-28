import { createAction, props, Action } from '@ngrx/store';

import { Todo } from '../../Models/todo';

export enum TodosAction {
  GetTodos = '[Todo Page] Get Todos',
  GetTodosSuccess = '[Todo List] Get Todos success',
  GetTodosFail = '[Todo Page] Get Todos fail',
  AddTodo = '[Todo Page] Add Todo',
  AddTodoSuccess = '[Todo Page] Add Todo success',
  UpdateTodo = '[Todo Page] Update Todo',
  UpdateTodoSuccess = '[Todo Page] Update Todo success',
  DeleteTodo = '[Todo Page] Delete Todo',
  DeleteTodoSuccess = '[Todo Page] Delete Todo success',
}


export const getTodos = createAction(TodosAction.GetTodos);

export const getTodosSuccess = createAction(
  TodosAction.GetTodosSuccess,
  props<{ todos: ReadonlyArray<Todo> }>()
);

export const addTodo = createAction(
  TodosAction.AddTodo,
  props<{todo: Todo}>()
)

export const addTodoSuccess = createAction(
  TodosAction.AddTodoSuccess,
  props<{ todo: Todo }>()
)

export const updateTodo = createAction(
  TodosAction.UpdateTodo,
  props<{ todo: Todo }>()
)

export const updateTodoSuccess = createAction(
  TodosAction.UpdateTodoSuccess,
  props<{ todo: Todo }>()
)

export const deleteTodo = createAction(
  TodosAction.DeleteTodo,
  props<{ todoId: number }>()
)

export const deleteTodoSuccess = createAction(
  TodosAction.DeleteTodoSuccess,
  props<{ todoId: number }>()
)
