export enum NotificationsActionTypes {
  SET_NORIFICATION_SUCCESS = 'SET_NORIFICATION_SUCCESS',
  SET_NORIFICATION_ERROR = 'SET_NORIFICATION_ERROR',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION',
}

export type NotificationsActionCreatorsTypes =
  | ISetNotificationSuccess
  | ISetNotificationError
  | IDeleteNotification;

export interface NotificationInitialState {
  notification: string | null;
  type?: 'info' | 'warning' | 'success' | 'error';
}

interface ISetNotificationSuccess {
  type: NotificationsActionTypes.SET_NORIFICATION_SUCCESS;
  payload: string;
}

interface ISetNotificationError {
  type: NotificationsActionTypes.SET_NORIFICATION_ERROR;
  payload: string;
}

interface IDeleteNotification {
  type: NotificationsActionTypes.DELETE_NOTIFICATION;
}
