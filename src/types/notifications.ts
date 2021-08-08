export enum NotificationsActionTypes {
  SET_NORIFICATION_SUCCESS = 'SET_NORIFICATION_SUCCESS',
  SET_NORIFICATION_ERROR = 'SET_NORIFICATION_ERROR',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}

export type NotificationsActionCreatorsTypes = setNotificationSuccess | 
                                               setNotificationError | 
                                               deleteNotification;

export interface NotificationInitialState {
  notification: string | null;
  type?: 'info' | 'warning' | 'success' | 'error';
}

interface setNotificationSuccess {
  type: NotificationsActionTypes.SET_NORIFICATION_SUCCESS,
  payload: string,
}

interface setNotificationError {
  type: NotificationsActionTypes.SET_NORIFICATION_ERROR,
  payload: string
}

interface deleteNotification {
  type: NotificationsActionTypes.DELETE_NOTIFICATION,
}
