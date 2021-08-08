import { IProduct } from './products';

export enum SavedActionTypes {
  FETCH_SAVED = 'FETCH_SAVED',
  FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS',
  FETCH_SAVED_ERROR = 'FETCH_SAVED_ERROR',
  PRODUCT_SAVE = 'PRODUCT_SAVE',
  PRODUCT_UNSAVE = 'PRODUCT_UNSAVE',
}

export type SavedActionCreatorsTypes = IFetchProducts | 
                                       IFetchProductsSuccess |
                                       IFetchProductsError |
                                       IProductUnsave;

export interface SavedInitialState {
  isLoading: boolean;
  saved: Array<IProduct>;
}

interface IFetchProducts {
  type: SavedActionTypes.FETCH_SAVED;
}

interface IFetchProductsSuccess {
  type: SavedActionTypes.FETCH_SAVED_SUCCESS;
  payload: Array<IProduct>;
}

interface IFetchProductsError {
  type: SavedActionTypes.FETCH_SAVED_ERROR;
}

interface IProductUnsave {
  type: SavedActionTypes.PRODUCT_UNSAVE;
  payload: string;
}
