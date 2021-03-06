import axios from 'axios';
import { Dispatch } from 'redux';
import { SavedActionCreatorsTypes, SavedActionTypes } from '../../types/saved';
import {
  sendNotificationSuccess,
  sendNotificationError,
} from '../notifications/actions';

export const fetchSaved = () => {
  return async (dispatch: Dispatch<SavedActionCreatorsTypes & any>) => {
    try {
      dispatch({ type: SavedActionTypes.FETCH_SAVED });
      const res = await axios.get('/api/products/saved', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      dispatch({
        type: SavedActionTypes.FETCH_SAVED_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: SavedActionTypes.FETCH_SAVED_ERROR });
    }
  };
};

export const saveProduct = (id: string) => {
  return async (dispatch: Dispatch<SavedActionCreatorsTypes & any>) => {
    try {
      await axios.post(
        `/api/products/${id}/save`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      dispatch(sendNotificationSuccess('Product saved'));
      dispatch({ type: SavedActionTypes.PRODUCT_SAVE });
    } catch (error) {
      console.log(error);
      dispatch(sendNotificationError(error.response.data.error));
      dispatch({ type: SavedActionTypes.FETCH_SAVED_ERROR });
    }
  };
};

export const unsaveProduct = (id: string) => {
  return async (dispatch: Dispatch<SavedActionCreatorsTypes & any>) => {
    try {
      await axios.post(
        `/api/products/${id}/unsave`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      dispatch(sendNotificationSuccess('Product removed from saved'));
      dispatch({
        type: SavedActionTypes.PRODUCT_UNSAVE,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
