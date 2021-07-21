import { TAction, NotificationsActionTypes } from '../../types/notifications';
import { Dispatch } from 'redux'; 

export const sendNotificationSuccess = (message: string) => {
  return (dispatch: Dispatch<TAction>) => {
    dispatch({
      type: NotificationsActionTypes.SET_NORIFICATION_SUCCESS,
      payload: message,
    });
  }
}

export const sendNotificationError = (message: string) => {
  return (dispatch: Dispatch<TAction>) => {
    dispatch({
      type: NotificationsActionTypes.SET_NORIFICATION_ERROR,
      payload: message,
    });
  }
}

export const deleteNotification = (message: string) => {
  return (dispatch: Dispatch<TAction>) => {
    dispatch({ type: NotificationsActionTypes.DELETE_NOTIFICATION });
  }
}