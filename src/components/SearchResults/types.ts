import { ISearchParams } from '../../types/search';
import { IProduct } from '../../types/products';
export interface ISearchResultsProps {
  isAuth: boolean;
  isLoading: boolean;
  isFetchedAll: boolean;
  searchParams: ISearchParams;
  searchResults: Array<IProduct>;
}

export interface ISearchResultsComponentProps {
  isLoading: boolean;
  isFetchedAll: boolean;
  searchResults: Array<IProduct>;
  onClearSearchOptionClick: () => void;
}
