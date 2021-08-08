import {
  ViewerInitialState,
  ViewerActionCreatorsTypes,
  ViewerActionTypes,
} from '../../types/viewer';

const initialState: ViewerInitialState = {
  isAuth: false,
  isLoading: false,
  viewer: {
    id: '',
    fullName: '',
    location: null,
    avatar: null,
    phone: null,
    createdAt: 0,
    updatedAt: null,
    email: '',
  },
};

export const viewerReducer = (
  state = initialState,
  action: ViewerActionCreatorsTypes
): ViewerInitialState => {
  switch (action.type) {
    case ViewerActionTypes.FETCH_CURRENT_USER:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        viewer: initialState.viewer,
      };
    case ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        viewer: action.payload,
      };
    case ViewerActionTypes.FETCH_CURRENT_USER_ERROR:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        viewer: initialState.viewer,
      };
    case ViewerActionTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        viewer: initialState.viewer,
      };

    default:
      return state;
  }
};
