import { Dispatch } from 'redux';
import {
  NotificationsActionCreatorsTypes,
  NotificationsActionTypes,
} from '../../types/notifications';

export const sendNotificationSuccess = (message: string) => {
  return (dispatch: Dispatch<NotificationsActionCreatorsTypes>) => {
    dispatch({
      type: NotificationsActionTypes.SET_NORIFICATION_SUCCESS,
      payload: message,
    });
  };
};

export const sendNotificationError = (message: string) => {
  return (dispatch: Dispatch<NotificationsActionCreatorsTypes>) => {
    dispatch({
      type: NotificationsActionTypes.SET_NORIFICATION_ERROR,
      payload: message,
    });
  };
};

export const deleteNotification = (message: string) => {
  return (dispatch: Dispatch<NotificationsActionCreatorsTypes>) => {
    dispatch({ type: NotificationsActionTypes.DELETE_NOTIFICATION });
  };
};
