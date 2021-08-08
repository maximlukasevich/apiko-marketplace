export enum ViewerActionTypes {
  FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
  FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS',
  FETCH_CURRENT_USER_ERROR = 'FETCH_CURRENT_USER_ERROR',
  LOGOUT = 'LOGOUT',
}

export type ViewerActionCreatorsTypes = IFetchCurrentUserAction | 
                                        IFetchCurrentUserSuccessAction | 
                                        IFetchCurrentUserErrorAction | 
                                        ICurrentUserLogoutAction;

export interface ViewerInitialState {
  isAuth: boolean;
  isLoading: boolean;
  viewer: IViewer;
}

export interface IViewer {
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
  type: ViewerActionTypes.LOGOUT;
}

interface IFetchCurrentUserAction {
  type: ViewerActionTypes.FETCH_CURRENT_USER;
}

interface IFetchCurrentUserSuccessAction {
  type: ViewerActionTypes.FETCH_CURRENT_USER_SUCCESS;
  payload: IViewer;
}

interface IFetchCurrentUserErrorAction {
  type: ViewerActionTypes.FETCH_CURRENT_USER_ERROR;
}