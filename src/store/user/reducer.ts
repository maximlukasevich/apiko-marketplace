import { IInitialState, IAction, UserActionTypes } from '../../types/user';

const initialState: IInitialState = {
  isAuth: false,
  isLoading: false,
  error: null,
  user: []
}

export const userReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { 
        ...state,
        isAuth: false,
        isLoading: true,
        error: null,
        user: []
      }
    case UserActionTypes.FETCH_USER_SUCCESS: 
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        error: null,
        user: action.payload,
      }
    case UserActionTypes.FETCH_USER_ERROR: 
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: action.payload,
        user: []
      }
    default: 
      return state;
  }
}