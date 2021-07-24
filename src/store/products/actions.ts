import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductsActionTypes, TAction } from '../../types/products';

export const fetchProducts = (screen: number) => {
  const limit = 20; 
  const offset = screen * limit;
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS
      });
      const res = await axios.get('/products/latest', {
        params: {
          offset: offset,
          limit: limit,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (screen === 0) {
        dispatch({
          type: ProductsActionTypes.CLEAN_PRODUCTS
        });
      }
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

