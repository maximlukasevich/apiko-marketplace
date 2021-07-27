import { IResultProduct, ISearchParams } from '../../types/search';
export interface ISearchResultsProps {
  isAuth: boolean;
  isLoading: boolean;
  fetchAll: boolean;
  searchParams: ISearchParams;
  searchResults: Array<IResultProduct>;
} 

export interface ISearchResultsComponentProps {
  isLoading: boolean;
  fetchAll: boolean;
  searchResults: Array<IResultProduct>;
  onClearSearchOptionClick: () => void;
} 