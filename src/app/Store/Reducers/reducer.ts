import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "src/app/Store/app.state";
import { sharedReducers } from "./shard.reducers";
import { todosReducer } from "./todo.reducers";

// meta reducer thuc hien debug truoc khi reducer binh thuong khac xu ly
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const reducers: ActionReducerMap<AppState> = {
  todos:todosReducer,
  shared:sharedReducers,
  router:routerReducer
}