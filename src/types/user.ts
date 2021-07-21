export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  USER_UPDATE = 'USER_UPDATE',
  LOGOUT = 'LOGOUT',
}

export type TAction = IFetchUserAction | 
                      IFetchUserSuccessAction | 
                      IFetchUserErrorAction | 
                      IUserUpdate |
                      IUserLogout;

export interface IInitialState {
  isAuth: boolean,
  isLoading: boolean,
  error: string | null,
  user: IUser | null
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

interface IUserUpdate {
  type: UserActionTypes.USER_UPDATE
}
interface IUserLogout {
  type: UserActionTypes.LOGOUT
}

interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER,
}

interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: IUser
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR,
  payload: string
}