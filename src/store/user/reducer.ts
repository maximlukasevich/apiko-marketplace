import { IInitialState, TAction, UserActionTypes } from '../../types/user';

const initialState: IInitialState = {
  isAuth: false,
  isLoading: false,
  error: null,
  user: null
}

export const userReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { 
        ...state,
        isAuth: false,
        isLoading: true,
        error: null,
        user: state.user
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
        user: null
      }
    case UserActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: null,
        user: null
      }

    default: 
      return state;
  }
}