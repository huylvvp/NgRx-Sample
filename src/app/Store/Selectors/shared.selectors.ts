import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "../shared.state";

export const SharedStateKey = "shared" // key in object tree
const getSharedState = createFeatureSelector<SharedState>("shared"); 

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});