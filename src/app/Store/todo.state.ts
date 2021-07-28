import { Todo } from "../Models/todo";

export interface TodosState {
  todos: ReadonlyArray<Todo>,
  // error: Readonly<boolean>,
}

export const initialTodosState: TodosState = {
  todos: [],
  // error: false,
}
