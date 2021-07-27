export enum SearchActionTypes {
  SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS',
  DELETE_SEARCH_PARAMS = 'DELETE_SEARCH_PARAMS',
  FETCH_RESULTS = 'FETCH_RESULTS',
  FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS',
  FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR',
  CLEAR_RESULTS = 'CLEAR_RESULTS',
  FETCH_ALL_RESULTS_TRUE = 'FETCH_ALL_RESULTS_TRUE',
}

export type TAction = ISetSearchParamsAction |
                      IDeleteParamsAction |
                      IFearchResultsAction | 
                      IFeatchResultsSuccessAction |
                      IFeatchResultsErrorAction |
                      IClearResults | 
                      IFetchAllResultsTrueAction;

export interface IInitialState {
  searchParams: ISearchParams;
  isLoading: boolean;
  fetchAll: boolean;
  searchResult: Array<IResultProduct>;
  search: boolean;
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

interface IDeleteParamsAction {
  type: SearchActionTypes.DELETE_SEARCH_PARAMS;
}

interface IFearchResultsAction { 
  type: SearchActionTypes.FETCH_RESULTS;
}

interface IFeatchResultsSuccessAction {
  type: SearchActionTypes.FETCH_RESULTS_SUCCESS;
  payload: Array<IResultProduct>;
}

interface IFeatchResultsErrorAction {
  type: SearchActionTypes.FETCH_RESULTS_ERROR;
}

interface IClearResults {
  type: SearchActionTypes.CLEAR_RESULTS;
}

interface IFetchAllResultsTrueAction {
  type: SearchActionTypes.FETCH_ALL_RESULTS_TRUE;
}