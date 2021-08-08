import { FormikProps } from 'formik';
import { ISuggestion } from '../../types/search-suggestions';
import { ISearchParams } from '../../types/search';

export interface IFormikValues {
  name: string | null;
  location: string | null;
}

export interface IHeaderSearchProps {
  isLoading: boolean;
  suggestions: Array<ISuggestion>;
  searchParams: ISearchParams;
}

export interface IHeaderSearchComponentProps {
  formik: FormikProps<IFormikValues>;
  suggestions: Array<ISuggestion>;
  isLoading: boolean;
}


