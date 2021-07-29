import { SearchRecentsActionTypes, TAction, IInitialState } from '../../types/searchRecents';

const initialState: IInitialState = {
  recents: [],
}

export const searchRecentsReducer = (state = initialState, action: TAction): IInitialState => {
  switch(action.type) {
    case SearchRecentsActionTypes.ADD_RECENT:
      return {
        ...state,
        recents: [action.payload, ...state.recents].slice(0, 8),
      }
    case SearchRecentsActionTypes.CLEAR_RECENTS:
      return {
        ...state,
        recents: [],
      }
    default:
      return state;
  }
}