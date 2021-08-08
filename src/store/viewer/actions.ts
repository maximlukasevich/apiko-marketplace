import axios from 'axios';
import { Dispatch } from 'redux';
import {
  ViewerActionCreatorsTypes,
  ViewerActionTypes,
} from '../../types/viewer';
import {
  sendNotificationError,
  sendNotificationSuccess,
} from '../notifications/actions';

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<ViewerActionCreatorsTypes & any>) => {
    try {
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER,
      });
      const res = await axios.post(
        '/api/auth/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: {
          ...res.data.user,
          email,
        },
      });
    } catch (error) {
      dispatch(sendNotificationError(error.response.data.error));
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const register = (fullName: string, email: string, password: string) => {
  return async (dispatch: Dispatch<ViewerActionCreatorsTypes & any>) => {
    try {
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER,
      });
      const res = await axios.post(
        '/api/auth/register',
        {
          fullName,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: {
          ...res.data.user,
          email,
        },
      });
    } catch (error) {
      dispatch(sendNotificationError(error.response.data.error));
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

export const auth = () => {
  return async (dispatch: Dispatch<ViewerActionCreatorsTypes>) => {
    try {
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER,
      });
      const res = await axios.get('/api/account/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      localStorage.removeItem('token');
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<ViewerActionCreatorsTypes>) => {
    dispatch({
      type: ViewerActionTypes.LOGOUT,
    });
  };
};

export const userUpdate = (
  fullName: string,
  avatar: string | null,
  phone: string | null,
  location: string | null
) => {
  return async (dispatch: Dispatch<ViewerActionCreatorsTypes & any>) => {
    try {
      const res = await axios.put(
        '/api/account/user',
        {
          fullName,
          avatar,
          phone,
          location,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch(sendNotificationSuccess('Profile updated'));
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch(
        sendNotificationSuccess('An error occurred while updating the data')
      );
      console.log(error.response);
      dispatch({
        type: ViewerActionTypes.FETCH_CURRENT_USER_ERROR,
      });
    }
  };
};
