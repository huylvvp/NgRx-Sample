import { createAction, props } from "@ngrx/store";

export enum SharedActions {
  SET_ERROR_MESSAGE = '[Shared State] Set error message'
}
export const setErrorMessage = createAction(  
  SharedActions.SET_ERROR_MESSAGE,
  props<{ message: string }>()
)