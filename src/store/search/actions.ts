import axios from 'axios';
import { Dispatch } from 'react';
import { SearchActionTypes, TAction } from '../../types/search';
import { addRecent } from '../search-recents/actions';

export const setSearchParams = (  
  keywords: string | null, 
  location: string | null, 
  priceFrom: number | null,
  priceTo: number | null
) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try { 
      if (keywords) {
        dispatch(addRecent(keywords));
      }
      dispatch({
        type: SearchActionTypes.SET_SEARCH_PARAMS,
        payload: {
          keywords,
          location,
          priceFrom,
          priceTo
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const clearSearchParams = () => {
  return async (dispatch: Dispatch<TAction>) => {
    dispatch({ type: SearchActionTypes.DELETE_SEARCH_PARAMS });
  }
}

export const search = (
  keywords: string | null, 
  location: string | null, 
  priceFrom: number | null,
  priceTo: number | null,
  screen: number 
) => {
  return async (dispatch: Dispatch<TAction>) => {
    const limit = 20; 
    const offset = screen * limit;
    try { 
      if (screen === 0) {
        dispatch({ type: SearchActionTypes.CLEAR_RESULTS });
      }
      dispatch({ type: SearchActionTypes.FETCH_RESULTS });
      const res = await axios.get('/products/search', { 
        params: {
          keywords,
          location,
          priceFrom,
          priceTo,
          offset,
          limit,
        }, 
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({
        type: SearchActionTypes.FETCH_RESULTS_SUCCESS,
        payload: res.data,
      });
      if (res.data.length < limit) {
        dispatch({ type: SearchActionTypes.FETCH_ALL_RESULTS_TRUE });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SearchActionTypes.FETCH_RESULTS_ERROR });
    }
  } 
}