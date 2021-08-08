import { IProduct } from './products';

export enum SearchActionTypes {
  SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS',
  DELETE_SEARCH_PARAMS = 'DELETE_SEARCH_PARAMS',
  SET_SHOW_RESULTS = 'SET_SHOW_RESULTS',
  FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS',
  FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS',
  FETCH_SEARCH_RESULTS_ERROR = 'FETCH_SEARCH_RESULTS_ERROR',
  CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS',
  SET_FETCHED_ALL = 'SET_FETCHED_ALL',
}

export type SearchActionCreatorsTypes = ISetSearchParams |
                                        IDeleteSearchParams |
                                        ISetShowResults |
                                        IFetchSearchResults |
                                        IFetchSearchResultsSuccess |
                                        IFetchSearchResultsError |
                                        IClearSearchResults |
                                        ISetFetchedAll;

export interface SearchInitialState {
  searchParams: ISearchParams;
  searchResults: Array<IProduct>;
  showResults: boolean;
  isLoading: boolean;
  isFetchedAll: boolean;
}

export interface ISearchParams {
  keywords: string | null;
  location: string | null;
  priceFrom: number | null;
  priceTo: number | null;
}

interface ISetSearchParams {
  type: SearchActionTypes.SET_SEARCH_PARAMS;
  payload: ISearchParams;
}

interface IDeleteSearchParams {
  type: SearchActionTypes.DELETE_SEARCH_PARAMS;
}

interface ISetShowResults {
  type: SearchActionTypes.SET_SHOW_RESULTS;
  payload: boolean;
}

interface IFetchSearchResults {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS;
}

interface IFetchSearchResultsSuccess {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS;
  payload: Array<IProduct>;
}

interface IFetchSearchResultsError {
  type: SearchActionTypes.FETCH_SEARCH_RESULTS_ERROR;
}

interface IClearSearchResults {
  type: SearchActionTypes.CLEAR_SEARCH_RESULTS;
}

interface ISetFetchedAll {
  type: SearchActionTypes.SET_FETCHED_ALL;
  payload: boolean;
}