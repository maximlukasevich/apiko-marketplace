import { Dispatch } from 'react';
import {
  SearchRecentsActionTypes,
  SearchRecentsActionCreatorsTypes,
} from '../../types/search-recents';

export const addRecent = (recent: string) => {
  return async (dispatch: Dispatch<SearchRecentsActionCreatorsTypes>) => {
    try {
      dispatch({
        type: SearchRecentsActionTypes.ADD_RECENT,
        payload: recent,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearRecents = () => {
  return async (dispatch: Dispatch<SearchRecentsActionCreatorsTypes>) => {
    try {
      dispatch({ type: SearchRecentsActionTypes.CLEAR_RECENTS });
    } catch (error) {
      console.log(error);
    }
  };
};
