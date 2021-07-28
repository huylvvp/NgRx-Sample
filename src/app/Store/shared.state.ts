export interface SharedState {
  errorMessage: string | null
}

export const initialSharedState: SharedState = {
  errorMessage: null,
};