import { IInitialState, TAction, SearchActionTypes } from '../../types/search';

const initialState: IInitialState = {
  searchParams: {
    keywords: null,
    location: null,
    priceFrom: null,
    priceTo: null,
  },
  isLoading: false,
  fetchAll: false,
  searchResult: [],
  search: false,
}

export const searchReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_PARAMS: 
      return {
        ...state,
        searchParams: action.payload,
        search: true,
      }
    case SearchActionTypes.DELETE_SEARCH_PARAMS: 
      return {
        ...state,
        searchParams: {
          keywords: null,
          location: null,
          priceFrom: null,
          priceTo: null,
        },
        search: false,
      }
    case SearchActionTypes.FETCH_RESULTS:
      return {
        ...state,
        isLoading: true,
        fetchAll: false,
      }
    case SearchActionTypes.FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: state.searchResult.concat(action.payload),
      }
    case SearchActionTypes.FETCH_RESULTS_ERROR:
      return {
        ...state,
        isLoading: false,
        searchResult: [],
      }
    case SearchActionTypes.CLEAR_RESULTS:
      return {
        ...state,
        searchResult: [],
      }
    case SearchActionTypes.FETCH_ALL_RESULTS_TRUE: 
      return {
        ...state,
        fetchAll: true,
      }
    default: 
      return state;
  }
}