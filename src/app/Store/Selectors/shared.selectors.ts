import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "../shared.state";

export const SharedStateKey = "shared" // key in object tree
const getSharedState = createFeatureSelector<SharedState>("shared"); 

// tao selector du chi co mot property trong  state Shared vi sau co the co nhieu propery trong phan nay
export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});