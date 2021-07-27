import { IInitialState, TAction, SavedActionTypes } from '../../types/saved';

const initialState: IInitialState = {
  isLoading: false,
  saved: [],
}

export const savedReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case SavedActionTypes.FETCH_SAVED: 
      return {
        ...state,
        isLoading: true,
        saved: [],
      }
    case SavedActionTypes.FETCH_SAVED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saved: action.payload,
      }
    case SavedActionTypes.FETCH_SAVED_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case SavedActionTypes.PRODUCT_UNSAVE:
      return {
        ...state,
        saved: state.saved.filter((item) => item.id !== action.payload),
      }
    default:
      return state;
  }
}