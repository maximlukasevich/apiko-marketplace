import { IInitialState, TAction, CurrentUserActionTypes } from '../../types/currentUser';

const initialState: IInitialState = {
  isAuth: false,
  isLoading: false,
  currentUser: {
    id: '',
    fullName: '',
    location: null,
    avatar: null,
    phone: null,
    createdAt: 0,
    updatedAt: null,
    email: '',
  }
}

export const currentUserReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case CurrentUserActionTypes.FETCH_CURRENT_USER:
      return { 
        ...state,
        isAuth: false,
        isLoading: true,
        currentUser: initialState.currentUser
      }
    case CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        currentUser: action.payload,
      }
    case CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR: 
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        currentUser: initialState.currentUser
      }
    case CurrentUserActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        currentUser: initialState.currentUser
      }

    default: 
      return state;
  }
}