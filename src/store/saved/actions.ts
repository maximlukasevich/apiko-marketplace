import axios from 'axios';
import { Dispatch } from 'redux';
import { TAction, SavedActionTypes } from '../../types/saved';

export const fetchSaved = () => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      dispatch({ 
        type: SavedActionTypes.FETCH_SAVED
      });
      const res = await axios.get('/products/saved', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({
        type: SavedActionTypes.FETCH_SAVED_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }
}