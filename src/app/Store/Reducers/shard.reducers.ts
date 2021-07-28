import { createReducer, on } from "@ngrx/store";
import { setErrorMessage, SharedActions } from "../Actions/shared.action";
import { initialSharedState } from "../shared.state";
export const sharedReducers = createReducer(
  initialSharedState,
  on(setErrorMessage, 
    (state, {message}) => ({
      ...state, 
      errorMessage:message
    }))
)