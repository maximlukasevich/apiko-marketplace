import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductsActionTypes, TAction } from '../../types/products';
import { sendNotificationError, sendNotificationSuccess } from '../notifications/actions';

export const fetchProducts = (screen: number) => {
  const limit = 20; 
  const offset = screen * limit;
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      if (screen === 0) {
        dispatch({
          type: ProductsActionTypes.CLEAN_PRODUCTS
        });
      }
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS
      });
      const res = await axios.get('/api/products/latest', {
        params: {
          offset: offset,
          limit: limit,
        },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (res.data.length < limit) {
        dispatch({
          type: ProductsActionTypes.FETCH_ALL_TRUE
        });
      }
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      console.log(error.response);
    }
  }
}

export const fetchOneProduct = (id: string) => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_ONE_PRODUCT });
      const res = await axios.get(`/api/products/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({ 
        type: ProductsActionTypes.FETCH_ONE_PRODUCT_SUCCESS, 
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: ProductsActionTypes.FETCH_ONE_PRODUCT_ERROR });
    }
  }
}

export const uploadProduct = (
  title: string,
  description: string,
  photos: Array<string>, 
  location: string,
  price: number,
) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      const res = await axios.post('/api/products', {
        title,
        description,
        photos,
        location,
        price: Number(price),
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(res);
      dispatch(sendNotificationSuccess('Product loaded'));
    } catch (error) {
      dispatch(sendNotificationError('Failed to load product'));
      console.log(error.response);
    }
  }
}

