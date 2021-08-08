import {
  SearchActionTypes,
  SearchActionCreatorsTypes,
  SearchInitialState,
} from '../../types/search';

const initialState: SearchInitialState = {
  searchParams: {
    keywords: null,
    location: null,
    priceFrom: null,
    priceTo: null,
  },
  searchResults: [],
  showResults: false,
  isLoading: false,
  isFetchedAll: false,
};

export const searchReducer = (
  state = initialState,
  action: SearchActionCreatorsTypes
): SearchInitialState => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    case SearchActionTypes.DELETE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: initialState.searchParams,
        searchResults: [],
        showResults: false,
      };
    case SearchActionTypes.SET_SHOW_RESULTS:
      return {
        ...state,
        showResults: action.payload,
      };
    case SearchActionTypes.FETCH_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: true,
      };
    case SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResults: [...state.searchResults, ...action.payload],
      };
    case SearchActionTypes.FETCH_SEARCH_RESULTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case SearchActionTypes.CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        isLoading: false,
        isFetchedAll: false,
        searchResults: [],
      };
    case SearchActionTypes.SET_FETCHED_ALL:
      return {
        ...state,
        isFetchedAll: action.payload,
      };
    default:
      return state;
  }
};
