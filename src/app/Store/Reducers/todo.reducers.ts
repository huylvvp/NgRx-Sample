import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { Todo } from '../../Models/todo';
import { addTodo, addTodoSuccess, deleteTodoSuccess, getTodosSuccess, updateTodoSuccess } from '../Actions/todo.actions';
import { initialTodosState, todosAdapter } from '../todo.state';

export const todosReducer = createReducer(
  initialTodosState,
  on(getTodosSuccess,
    (state, { todos }) =>
      todosAdapter.setAll(todos.filter(todo => !todo.complete), state)
      
  ),

  on(addTodoSuccess,
    (state, { todo }) =>
      todosAdapter.addOne(todo, state)
  ),

  on(updateTodoSuccess,
    (state, { todo }) =>
      todosAdapter.updateOne({
        id: todo.id,
        changes: {
          ...state.entities[todo.id],
          title: todo.title,
          complete: todo.complete
        }
      }, state)
  ),

  on(deleteTodoSuccess,
    (state, { todoId }) =>
      todosAdapter.removeOne(todoId, state)
  )
)
