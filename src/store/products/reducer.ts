import { IInitialState, TAction, ProductsActionTypes } from '../../types/products';

const initialState: IInitialState = {
  isLoading: false,
  fetchAll: false,
  products: [],
  oneProduct: {
    id: '',
    ownerId: '',
    title: '',
    photos: [],
    description: null,
    location: '',
    price: 0,
    createdAt: 0,
    updatedAt: null,
    saved: false,
    chatId: null,
    owner: {
      id: '',
      fullName: '',
      location: null,
      avatar: null,
      phone: null,
      createdAt: 0,
      updatedAt: null,
    }
  },
}

export const productsReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        fetchAll: false,
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
    case ProductsActionTypes.FETCH_ONE_PRODUCT: 
      return {
        ...state,
        isLoading: true,
        oneProduct: initialState.oneProduct,
      }
    case ProductsActionTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        oneProduct: action.payload,
      }
    case ProductsActionTypes.FETCH_ONE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        oneProduct: initialState.oneProduct,
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