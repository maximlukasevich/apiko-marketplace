export enum SearchSuggestionsActionTypes {
  FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS',
  FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS',
  FETCH_SUGGESTIONS_ERROR = 'FETCH_SUGGESTIONS_ERROR',
}

export type SearchSuggestionsActionCreatorsTypes = IFeatchSuggestions | 
                                                   IFeatchSuggestionsSuccess | 
                                                   IFeatchSuggestionsError;

export interface SearchSuggestionsInitialState {
  isLoading: boolean;
  suggestions: Array<ISuggestion>;
}

export interface ISuggestion {
  id: string;
  photos: Array<string>;
  title: string;
  price: number;
}

interface IFeatchSuggestions {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS;
}

interface IFeatchSuggestionsSuccess {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_SUCCESS;
  payload: Array<ISuggestion>;
}

interface IFeatchSuggestionsError {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_ERROR;
}

