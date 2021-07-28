import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { Todo } from '../../Models/todo';
import { addTodo, addTodoSuccess, getTodosSuccess, updateTodoSuccess } from '../Actions/todo.actions';
import { initialTodosState } from '../todo.state';

export const todosReducer = createReducer(
  initialTodosState,
  on(getTodosSuccess,
    (state, { todos }) => (
      {
        ...state,
        todos: todos,
      }
    )
  ),

  on(addTodoSuccess,
    (state, { todo }) => {
      
      return {
        ...state,
        todos: [...state.todos, todo],
      }
    }),

  on(updateTodoSuccess,
    (state, { todo }) => {
      
      const todos = state.todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
      return {
        ...state,
        todos: todos,
      }
    }),
)
