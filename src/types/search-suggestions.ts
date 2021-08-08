export enum SearchSuggestionsActionTypes {
  FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS',
  FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS',
  FETCH_SUGGESTIONS_ERROR = 'FETCH_SUGGESTIONS_ERROR',
}

export type SearchSuggestionsActionCreatorsTypes = IFeatchSuggestionsAction | 
                                                   IFeatchSuggestionsSuccessAction | 
                                                   IFeatchSuggestionsErrorAction;

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

interface IFeatchSuggestionsAction {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS;
}

interface IFeatchSuggestionsSuccessAction {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_SUCCESS;
  payload: Array<ISuggestion>;
}

interface IFeatchSuggestionsErrorAction {
  type: SearchSuggestionsActionTypes.FETCH_SUGGESTIONS_ERROR;
}

