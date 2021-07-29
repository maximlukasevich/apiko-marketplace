export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  CLEAN_PRODUCTS = 'CLEAN_PRODUCTS',
  FETCH_ONE_PRODUCT = 'FETCH_ONE_PRODUCT',
  FETCH_ONE_PRODUCT_SUCCESS = 'FETCH_ONE_PRODUCT_SUCCESS',
  FETCH_ONE_PRODUCT_ERROR = 'FETCH_ONE_PRODUCT_ERROR',
  FETCH_ALL_TRUE = 'FETCH_ALL_TRUE',
}

export type TAction = IFetchProductsAction | 
                      IFetchProductsSuccessAction |
                      IFetchAllTrueAction |
                      IFeatchProductAction |
                      IFeatchProductSuccessAction |
                      IFeatchProductErrorAction |
                      ICleanProductsAction;

export interface IInitialState {
  isLoading: boolean;
  fetchAll: boolean;
  products: Array<IProduct>;
  oneProduct: IOneProduct;
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

export interface IOneProduct {
  id: string;
  ownerId: string;
  title: string;
  photos: Array<string> | string;
  description: string | null;
  location: string;
  price: number;
  createdAt: number;
  updatedAt: number | null;
  saved: boolean;
  chatId: string | null;
  owner: {
    id: string;
    fullName: string;
    location: string | null;
    avatar: string | null;
    phone: string | null;
    createdAt: number;
    updatedAt: number | null;
  }
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

interface IFeatchProductAction {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT;
}

interface IFeatchProductSuccessAction {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT_SUCCESS;
  payload: IOneProduct;
}

interface IFeatchProductErrorAction {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT_ERROR;
}

interface ICleanProductsAction {
  type: ProductsActionTypes.CLEAN_PRODUCTS;
}