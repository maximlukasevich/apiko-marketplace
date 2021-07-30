import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes, TAction } from '../../types/user';

export const fetchUser = (id: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const res = await axios.get(`/users/${id}`);
      dispatch({ 
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: UserActionTypes.FETCH_USER_ERROR });
    }
  }
}

export const fetchUserProducts = (id: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER_PRODUCTS });
      const res = await axios.get(`/users/${id}/products`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({ 
        type: UserActionTypes.FETCH_USER_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: UserActionTypes.FETCH_USER_PRODUCTS_ERROR });
    }
  }
}