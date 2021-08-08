import {
  SearchRecentsActionTypes,
  SearchRecentsActionCreatorsTypes,
  SearchRecentsInitialState,
} from '../../types/search-recents';

const initialState: SearchRecentsInitialState = {
  recents: [],
};

export const searchRecentsReducer = (
  state = initialState,
  action: SearchRecentsActionCreatorsTypes
): SearchRecentsInitialState => {
  switch (action.type) {
    case SearchRecentsActionTypes.ADD_RECENT:
      return {
        ...state,
        recents: [action.payload, ...state.recents].slice(0, 8),
      };
    case SearchRecentsActionTypes.CLEAR_RECENTS:
      return {
        ...state,
        recents: [],
      };
    default:
      return state;
  }
};
