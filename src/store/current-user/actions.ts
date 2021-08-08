import axios from 'axios';
import { CurrentUserActionTypes, TAction } from '../../types/currentUser';
import { sendNotificationError, sendNotificationSuccess } from '../notifications/actions';
import { Dispatch } from 'redux';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER
      });
      const res = await axios.post('/api/auth/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS, 
        payload: {
          ...res.data.user,
          email
        }
      });
    } catch (error) {
      dispatch(sendNotificationError(error.response.data.error));
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR, 
        payload: error.response.data.error
      });
    }
  }
}

export const register = (fullName: string, email: string, password: string) => {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER
      });
      const res = await axios.post('/api/auth/register', {
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
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: {
          ...res.data.user,
          email
        }
      });
    } catch (error) {
      dispatch(sendNotificationError(error.response.data.error));
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR, 
        payload: error.response.data.error
      });
    }
  }
}

export const auth = () => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER
      });
      const res = await axios.get('/api/account/user', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      localStorage.removeItem('token');
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<TAction>) => {
    dispatch({
      type: CurrentUserActionTypes.LOGOUT,
    });
  }
}

export const userUpdate = (
  fullName: string, 
  avatar: string | null, 
  phone: string | null, 
  location: string | null,
  )=> {
  return async (dispatch: Dispatch<TAction & any>) => {
    try {
      const res = await axios.put('/api/account/user', {
        fullName,
        avatar,
        phone,
        location,
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      dispatch(sendNotificationSuccess('Profile updated'));
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch(sendNotificationSuccess('An error occurred while updating the data'));
      console.log(error.response);
      dispatch({
        type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR,
      });
    }
  }
}