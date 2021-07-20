export type IAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction;

export interface IInitialState {
  isAuth: boolean,
  isLoading: boolean,
  error: string | null,
  user: Array<IUser>
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}


interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER,
}

interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: Array<IUser>
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR,
  payload: string
}

interface IUser {
  id: string,
  email: string,
  fullName: string,
  location: string,
  avatar: string,
  phone: string,
  createdAt: number,
  updatedAt: number,
}