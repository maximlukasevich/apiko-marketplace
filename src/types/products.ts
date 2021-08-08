import { IViewer } from './viewer';

export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  CLEAR_PRODUCTS = 'CLEAR_PRODUCTS',
  FETCH_ONE_PRODUCT = 'FETCH_ONE_PRODUCT',
  FETCH_ONE_PRODUCT_SUCCESS = 'FETCH_ONE_PRODUCT_SUCCESS',
  FETCH_ONE_PRODUCT_ERROR = 'FETCH_ONE_PRODUCT_ERROR',
  FETCHED_ALL = 'FETCHED_ALL',
}

export type ProductsActionCreatorsTypes = IFetchProducts | 
                                          IFetchProductsSuccess |
                                          IFetchedAll |
                                          IFeatchProduct |
                                          IFeatchProductSuccess |
                                          IFeatchProductError |
                                          IClearProducts;

export interface ProductsInitialState {
  isLoading: boolean;
  isFetchedAll: boolean;
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
  owner: IViewer;
}


interface IFetchProducts {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccess {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProduct;
}

interface IFetchedAll {
  type: ProductsActionTypes.FETCHED_ALL;
}

interface IFeatchProduct {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT;
}

interface IFeatchProductSuccess {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT_SUCCESS;
  payload: IOneProduct;
}

interface IFeatchProductError {
  type: ProductsActionTypes.FETCH_ONE_PRODUCT_ERROR;
}

interface IClearProducts {
  type: ProductsActionTypes.CLEAR_PRODUCTS;
}