import { IInitialState, TAction, SavedActionTypes } from '../../types/saved';

const initialState: IInitialState = {
  isLoading: false,
  saved: [],
}

export const savedReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case SavedActionTypes.FETCH_SAVED: 
      return {
        ...state,
        isLoading: true,
      }
    case SavedActionTypes.FETCH_SAVED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saved: action.payload,
      }
    default:
      return state;
  }
}