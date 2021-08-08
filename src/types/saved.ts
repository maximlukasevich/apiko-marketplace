import { IProduct } from './products';

export enum SavedActionTypes {
  FETCH_SAVED = 'FETCH_SAVED',
  FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS',
  FETCH_SAVED_ERROR = 'FETCH_SAVED_ERROR',
  PRODUCT_SAVE = 'PRODUCT_SAVE',
  PRODUCT_UNSAVE = 'PRODUCT_UNSAVE',
}

export type SavedActionCreatorsTypes = IFetchProductsAction | 
                                       IFetchProductsSuccessAction |
                                       IFetchProductsErrorAction |
                                       IProductUnsaveAction;

export interface SavedInitialState {
  isLoading: boolean;
  saved: Array<IProduct>;
}

interface IFetchProductsAction {
  type: SavedActionTypes.FETCH_SAVED;
}

interface IFetchProductsSuccessAction {
  type: SavedActionTypes.FETCH_SAVED_SUCCESS;
  payload: Array<IProduct>;
}

interface IFetchProductsErrorAction {
  type: SavedActionTypes.FETCH_SAVED_ERROR;
}

interface IProductUnsaveAction {
  type: SavedActionTypes.PRODUCT_UNSAVE;
  payload: string;
}
