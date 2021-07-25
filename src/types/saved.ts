export enum SavedActionTypes {
  FETCH_SAVED = 'FETCH_SAVED',
  FETCH_SAVED_SUCCESS = 'FETCH_SAVED_SUCCESS',
  FETCH_SAVED_ERROR = 'FETCH_SAVED_ERROR',
  PRODUCT_SAVE = 'PRODUCT_SAVE',
  PRODUCT_UNSAVE = 'PRODUCT_UNSAVE',
}

export type TAction = IFetchProductsAction | 
                      IFetchProductsSuccessAction |
                      IFetchProductsErrorAction |
                      IProductUnsaveAction;

export interface IInitialState {
  isLoading: boolean;
  saved: Array<ISaved>;
}

export interface ISaved {
  id: string;
  photos: Array<string>;
  ownerId: string;
  title: string;
  description: string | null;
  location: string;
  price: 0;
  createdAt: 0;
  updatedAt: number | null;
  saved: boolean;
}

interface IFetchProductsAction {
  type: SavedActionTypes.FETCH_SAVED;
}

interface IFetchProductsSuccessAction {
  type: SavedActionTypes.FETCH_SAVED_SUCCESS;
  payload: Array<ISaved>;
}

interface IFetchProductsErrorAction {
  type: SavedActionTypes.FETCH_SAVED_ERROR;
}

interface IProductUnsaveAction {
  type: SavedActionTypes.PRODUCT_UNSAVE;
  payload: string;
}
