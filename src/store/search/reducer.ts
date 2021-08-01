import { SearchActionTypes, TAction, IInitialState } from '../../types/search';

const initialState: IInitialState = {
  searchParams: {
    keywords: null,
    location: null,
    priceFrom: null,
    priceTo: null,
  },
  searchResults: [],
  showResults: false,
  isLoading: false,
  fetchAll: false,
}

export const searchReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      }
    case SearchActionTypes.DELETE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: initialState.searchParams,
        searchResults: [],
        showResults: false
      }
    case SearchActionTypes.SET_SHOW_RESULTS: 
      return {
        ...state,
        showResults: action.payload,
      }
    case SearchActionTypes.FETCH_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: true,
      }
    case SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResults: [...state.searchResults, ...action.payload],
      }
    case SearchActionTypes.FETCH_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case SearchActionTypes.CLEAR_SEARCH_RESULTS: 
      return {
        ...state,
        isLoading: false,
        fetchAll: false,
        searchResults: [],
      }
    case SearchActionTypes.SET_FETCH_ALL:
      return {
        ...state,
        fetchAll: action.payload,
      }
    default:
      return state;
  }
}