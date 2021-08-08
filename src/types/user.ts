import { IProduct } from './products';
import { IViewer } from './viewer';

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  FETCH_USER_PRODUCTS = 'FETCH_PRODUCTS_USER',
  FETCH_USER_PRODUCTS_SUCCESS = 'FETCH_USER_PRODUCTS_SUCCESS',
  FETCH_USER_PRODUCTS_ERROR = 'FETCH_USER_PRODUCTS_ERROR',
}

export type UserActionCreatorsTypes =
  | IFetchUser
  | IFetchUserSuccess
  | IFetchUserError
  | IFetchUserProducts
  | IFetchUserProductsSuccess
  | IFetchUserProductsError;

export interface UserInitialState {
  isLoading: boolean;
  sales: number;
  user: IViewer;
  userProducts: Array<IProduct>;
}

interface IFetchUser {
  type: UserActionTypes.FETCH_USER;
}

interface IFetchUserSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IViewer;
}

interface IFetchUserError {
  type: UserActionTypes.FETCH_USER_ERROR;
}

interface IFetchUserProducts {
  type: UserActionTypes.FETCH_USER_PRODUCTS;
}

interface IFetchUserProductsSuccess {
  type: UserActionTypes.FETCH_USER_PRODUCTS_SUCCESS;
  payload: {
    list: Array<IProduct>;
    count: number;
  };
}

interface IFetchUserProductsError {
  type: UserActionTypes.FETCH_USER_PRODUCTS_ERROR;
}
