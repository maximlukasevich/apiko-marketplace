import axios from 'axios';
import { UserActionTypes, IAction } from '../../types/user';
import { Dispatch } from 'redux';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USER
      });
      const res = await axios.post('/auth/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS, 
        payload: {
          ...res.data.user,
          email
        }
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR, 
        payload: error.response.data.error
      });
    }
  }
}

export const register = (fullName: string, email: string, password: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USER
      });
      const res = await axios.post('/auth/register', {
        fullName,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: {
          ...res.data.user,
          email
        }
      });
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USER_ERROR, 
        payload: error.response.data.error
      });
    }
  }
}

export const auth = () => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({
        type: UserActionTypes.FETCH_USER
      });
      const res = await axios.get('/account/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      dispatch({
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      localStorage.removeItem('token');
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: UserActionTypes.LOGOUT,
    });
  }
}