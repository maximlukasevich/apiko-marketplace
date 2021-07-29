import { SearchRecentsActionTypes, TAction } from '../../types/searchRecents';
import { Dispatch } from 'react';

export const addRecent = (recent: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({
        type: SearchRecentsActionTypes.ADD_RECENT,
        payload: recent,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const clearRecents = () => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: SearchRecentsActionTypes.CLEAR_RECENTS });
    } catch (error) {
      console.log(error);
    }
  }
}