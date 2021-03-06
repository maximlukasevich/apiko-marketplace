import {
  NotificationInitialState,
  NotificationsActionCreatorsTypes,
  NotificationsActionTypes,
} from '../../types/notifications';

const initialState: NotificationInitialState = {
  notification: null,
  type: undefined,
};

export const notificationsReducer = (
  state = initialState,
  action: NotificationsActionCreatorsTypes
): NotificationInitialState => {
  switch (action.type) {
    case NotificationsActionTypes.SET_NORIFICATION_SUCCESS:
      return {
        ...state,
        notification: action.payload,
        type: 'success',
      };
    case NotificationsActionTypes.SET_NORIFICATION_ERROR:
      return {
        ...state,
        notification: action.payload,
        type: 'error',
      };
    case NotificationsActionTypes.DELETE_NOTIFICATION:
      return {
        ...state,
        notification: null,
        type: undefined,
      };
    default:
      return state;
  }
};
