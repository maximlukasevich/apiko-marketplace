export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  FETCH_USER_PRODUCTS = 'FETCH_PRODUCTS_USER',
  FETCH_USER_PRODUCTS_SUCCESS = 'FETCH_USER_PRODUCTS_SUCCESS',
  FETCH_USER_PRODUCTS_ERROR = 'FETCH_USER_PRODUCTS_ERROR',
}

export type TAction = IFetchUserAction |
                       IFetchUserSuccessAction |
                       IFetchUserErrorAction |
                       IFetchUserProductsAction |
                       IFetchUserProductsSuccessAction |
                       IFetchUserProductsErrorAction;

export interface IInitialState {
  isLoading: boolean;
  sales: number;
  user: IUser;
  userProducts: Array<IUserProducts>;
}

export interface IUser {
  id: string;
  fullName: string;
  location: string | null;
  avatar: string | null;
  phone: string | null;
  createdAt: number;
  updatedAt: number | null;
}

export interface IUserProducts {
  id: string;
  ownerId: string;
  title: string;
  photos: Array<string>;
  description: string | null;
  location: string;
  price: number;
  createdAt: number;
  updatedAt: number | null;
  saved: boolean;
}

interface IFetchUserAction {
  type: UserActionTypes.FETCH_USER;
}

interface IFetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IUser;
}

interface IFetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
}

interface IFetchUserProductsAction {
  type: UserActionTypes.FETCH_USER_PRODUCTS;
}

interface IFetchUserProductsSuccessAction {
  type: UserActionTypes.FETCH_USER_PRODUCTS_SUCCESS;
  payload: {
    list: Array<IUserProducts>,
    count: number;
  }
}

interface IFetchUserProductsErrorAction {
  type: UserActionTypes.FETCH_USER_PRODUCTS_ERROR;
}

