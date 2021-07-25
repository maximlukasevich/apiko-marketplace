import axios from 'axios';
import { Dispatch } from 'redux';
import { SavedActionTypes, TAction } from '../../types/saved';
import { sendNotificationSuccess } from '../notifications/actions';

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
      dispatch({
        type: SavedActionTypes.FETCH_SAVED_ERROR
      });
    }
  }
}

export const saveProduct = (id: string) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try { 
      await axios.post(`/products/${id}/save`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(sendNotificationSuccess('Product saved'));
      dispatch({
        type: SavedActionTypes.PRODUCT_SAVE, 
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SavedActionTypes.FETCH_SAVED_ERROR
      });
    }
  }
}

export const unsaveProduct = (id: string) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      await axios.post(`/products/${id}/unsave`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(sendNotificationSuccess('Product removed from saved'));
      dispatch({
        type: SavedActionTypes.PRODUCT_UNSAVE,
        payload: id
      });
    } catch (error) {
      console.log(error);
    }
  }
}