import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { Todo } from "../Models/todo";
import { SharedState } from "./shared.state";
import { TodosState } from "./todo.state";


// init state tree in project
export interface AppState {
  // todos: TodosState,
  todos: TodosState
  shared:SharedState
  router: RouterReducerState<any>
}

