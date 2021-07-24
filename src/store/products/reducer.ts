import { IInitialState, TAction, ProductsActionTypes } from '../../types/products';

const initialState: IInitialState = {
  isLoading: false,
  fetchAll: false,
  products: []
}

export const productsReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        products: state.products,
      }
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: state.products.concat(action.payload),
      }
    case ProductsActionTypes.FETCH_ALL_TRUE:
      return {
        ...state,
        isLoading: false,
        fetchAll: true,
      }
    case ProductsActionTypes.CLEAN_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: [],
      }
    default:
      return state;
  }
}