import axios from 'axios';
import { Dispatch } from 'react';
import { sendNotificationError } from '../notifications/actions';
import {
  SearchActionTypes,
  SearchActionCreatorsTypes,
} from '../../types/search';

export const setSearchParams = (
  keywords: string | null,
  location: string | null,
  priceFrom: number | null,
  priceTo: number | null
) => {
  return async (dispatch: Dispatch<SearchActionCreatorsTypes>) => {
    dispatch({
      type: SearchActionTypes.SET_SEARCH_PARAMS,
      payload: {
        keywords,
        location,
        priceFrom,
        priceTo,
      },
    });
  };
};

export const deleteSearchParams = () => {
  return async (dispatch: Dispatch<SearchActionCreatorsTypes>) => {
    dispatch({ type: SearchActionTypes.DELETE_SEARCH_PARAMS });
  };
};

export const setShowResults = (show: boolean) => {
  return async (dispatch: Dispatch<SearchActionCreatorsTypes>) => {
    dispatch({
      type: SearchActionTypes.SET_SHOW_RESULTS,
      payload: show,
    });
  };
};

export const search = (
  keywords: string | null,
  location: string | null,
  priceFrom: number | null,
  priceTo: number | null,
  screen: number
) => {
  return async (dispatch: Dispatch<SearchActionCreatorsTypes & any>) => {
    const limit = 20;
    const offset = screen * limit;
    try {
      if (keywords || location) {
        dispatch({ type: SearchActionTypes.FETCH_SEARCH_RESULTS });
        const res = await axios.get('/api/products/search', {
          params: {
            keywords,
            location,
            priceFrom,
            priceTo,
            offset,
            limit,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (screen === 0) {
          dispatch({ type: SearchActionTypes.CLEAR_SEARCH_RESULTS });
        }
        dispatch({
          type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
          payload: res.data,
        });
        if (res.data.length < limit) {
          dispatch({
            type: SearchActionTypes.SET_FETCHED_ALL,
            payload: true,
          });
        }
      } else {
        dispatch(sendNotificationError('You must enter name or a location'));
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SearchActionTypes.FETCH_SEARCH_RESULTS_ERROR });
    }
  };
};
