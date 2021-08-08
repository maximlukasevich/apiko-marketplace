import {
  SearchSuggestionsInitialState,
  SearchSuggestionsActionCreatorsTypes,
  SearchSuggestionsActionTypes,
} from '../../types/search-suggestions';

const initialState: SearchSuggestionsInitialState = {
  isLoading: false,
  suggestions: [],
};

export const searchSuggestionsReducer = (
  state = initialState,
  action: SearchSuggestionsActionCreatorsTypes
): SearchSuggestionsInitialState => {
  switch (action.type) {
    case SearchSuggestionsActionTypes.FETCH_SUGGESTIONS:
      return {
        ...state,
        isLoading: true,
      };
    case SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggestions: action.payload,
      };
    case SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_ERROR:
      return {
        ...state,
        isLoading: false,
        suggestions: [],
      };
    default:
      return state;
  }
};
