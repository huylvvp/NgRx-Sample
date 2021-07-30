import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Todo } from "../Models/todo";

// export interface TodosState {
//   todos: ReadonlyArray<Todo>,
//   // error: Readonly<boolean>,
// }

// export const initialTodosState: TodosState = {
//   todos: [],
//   // error: false,
// }


export interface TodosState extends EntityState<Todo> {
  // todos:Todo[];
}

export const todosAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>()

export const initialTodosState = todosAdapter.getInitialState({
  // todos:[]
})