import {
  ProductsInitialState,
  ProductsActionCreatorsTypes,
  ProductsActionTypes,
} from '../../types/products';

const initialState: ProductsInitialState = {
  isLoading: false,
  isFetchedAll: false,
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
      email: '',
      location: null,
      avatar: null,
      phone: null,
      createdAt: 0,
      updatedAt: null,
    },
  },
};

export const productsReducer = (
  state = initialState,
  action: ProductsActionCreatorsTypes
): ProductsInitialState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        isFetchedAll: false,
        products: state.products,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: state.products.concat(action.payload),
      };
    case ProductsActionTypes.FETCHED_ALL:
      return {
        ...state,
        isLoading: false,
        isFetchedAll: true,
      };
    case ProductsActionTypes.FETCH_ONE_PRODUCT:
      return {
        ...state,
        isLoading: true,
        oneProduct: initialState.oneProduct,
      };
    case ProductsActionTypes.FETCH_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        oneProduct: action.payload,
      };
    case ProductsActionTypes.FETCH_ONE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        oneProduct: initialState.oneProduct,
      };
    case ProductsActionTypes.CLEAR_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: [],
      };
    default:
      return state;
  }
};
