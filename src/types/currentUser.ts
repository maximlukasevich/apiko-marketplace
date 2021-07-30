export enum CurrentUserActionTypes {
  FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
  FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS',
  FETCH_CURRENT_USER_ERROR = 'FETCH_CURRENT_USER_ERROR',
  LOGOUT = 'LOGOUT',
}

export type TAction = IFetchCurrentUserAction | 
                      IFetchCurrentUserSuccessAction | 
                      IFetchCurrentUserErrorAction | 
                      ICurrentUserLogoutAction;

export interface IInitialState {
  isAuth: boolean,
  isLoading: boolean,
  currentUser: ICurrentUser;
}

export interface ICurrentUser {
  id: string;
  fullName: string;
  location: string | null;
  avatar: string | null;
  phone: string | null;
  createdAt: number;
  updatedAt: number | null;
  email: string;
}

interface ICurrentUserLogoutAction {
  type: CurrentUserActionTypes.LOGOUT
}

interface IFetchCurrentUserAction {
  type: CurrentUserActionTypes.FETCH_CURRENT_USER,
}

interface IFetchCurrentUserSuccessAction {
  type: CurrentUserActionTypes.FETCH_CURRENT_USER_SUCCESS,
  payload: ICurrentUser
}

interface IFetchCurrentUserErrorAction {
  type: CurrentUserActionTypes.FETCH_CURRENT_USER_ERROR,
}