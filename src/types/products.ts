export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  CLEAN_PRODUCTS = 'CLEAN_PRODUCTS',
  FETCH_ALL_TRUE = 'FETCH_ALL_TRUE',
}

export type TAction = IFetchProductsAction | 
                      IFetchProductsSuccessAction |
                      IFetchAllTrueAction |
                      ICleanProductsAction;

export interface IInitialState {
  isLoading: boolean;
  fetchAll: boolean;
  products: Array<IProduct>;
}

export interface IProduct {
  id: string;
  photos: Array<string>;
  ownerId: string;
  title: string;
  description: string | null;
  location: string;
  price: number;
  createdAt: number;
  updatedAt: number | null;
  saved: boolean;
}

interface IFetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct;
}

interface IFetchAllTrueAction {
  type: ProductsActionTypes.FETCH_ALL_TRUE
}

interface ICleanProductsAction {
  type: ProductsActionTypes.CLEAN_PRODUCTS;
}