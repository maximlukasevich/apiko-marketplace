export enum SearchActionTypes {
  SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS',
  DELETE_SEARCH_PARAMS = 'DELETE_SEARCH_PARAMS',
  SET_SHOW_RESULTS = 'SET_SHOW_RESULTS',
  FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS',
  FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS',
  FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR',
  CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',
  SET_FETCH_ALL = 'SET_FETCH_ALL',
}

export type TAction = ISetSearchParamsAction |
                      IDeleteSearchParamsAction |
                      ISetShowResultsAction |
                      IFetchSearchResultsAction |
                      IFetchSearchResultsSuccessAction |
                      IFetchSearchResultsErrorAction |
                      IClearSearchResultsAction |
                      ISetFetchAllAction;

export interface IInitialState {
  searchParams: ISearchParams;
  searchResults: Array<IResultProduct>;
  showResults: boolean;
  isLoading: boolean;
  fetchAll: boolean;
}

export interface ISearchParams {
  keywords: string | null;
  location: string | null;
  priceFrom: number | null;
  priceTo: number | null;
}

export interface IResultProduct {
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

interface ISetSearchParamsAction {
  type: SearchActionTypes.SET_SEARCH_PARAMS;
  payload: ISearchParams;
}

interface IDeleteSearchParamsAction {
  type: SearchActionTypes.DELETE_SEARCH_PARAMS;
}

interface ISetShowResultsAction {
  type: SearchActionTypes.SET_SHOW_RESULTS;
  payload: boolean;
}

interface IFetchSearchResultsAction {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS;
}

interface IFetchSearchResultsSuccessAction {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS;
  payload: Array<IResultProduct>;
}

interface IFetchSearchResultsErrorAction {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_ERROR;
}

interface IClearSearchResultsAction {
  type: SearchActionTypes.CLEAR_SEARCH_RESULTS;
}

interface ISetFetchAllAction {
  type: SearchActionTypes.SET_FETCH_ALL;
  payload: boolean;
}