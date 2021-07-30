import { UserActionTypes, IInitialState, TAction } from '../../types/user';

const initialState: IInitialState = {
  isLoading: false,
  sales: 0,
  user: {
    id: '',
    fullName: '',
    location: null,
    avatar: null,
    phone: null,
    createdAt: 0,
    updatedAt: null,
  }, 
  userProducts: [],
}

export const userReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER: 
      return {
        ...state,
        isLoading: true,
        user: {
          id: '',
          fullName: '',
          location: null,
          avatar: null,
          phone: null,
          createdAt: 0,
          updatedAt: null,
        },
      }
    case UserActionTypes.FETCH_USER_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      }
    case UserActionTypes.FETCH_USER_ERROR: 
      return {
        ...state,
        isLoading: false,
        user: {
          id: '',
          fullName: '',
          location: null,
          avatar: null,
          phone: null,
          createdAt: 0,
          updatedAt: null,
        },
      }
    case UserActionTypes.FETCH_USER_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        sales: 0,
        userProducts: [],
      }
    case UserActionTypes.FETCH_USER_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sales: action.payload.count,
        userProducts: action.payload.list,
      }
    case UserActionTypes.FETCH_USER_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        sales: 0,
        userProducts: [],
      }
    default:
      return state;
  }
}
