import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useFormik, FormikValues, FormikErrors, FormikProps } from 'formik';
import { } from '@chakra-ui/react';
import { IFormikValues } from './types';
import { HeaderSearchComponent } from "./HeaderSearchComponent";
import { fetchSuggest } from '../../store/search-suggestions/actions';
import { RootState } from '../../store/indexReducer';
import { IHeaderSearchProps } from './types';
import { setSearchParams } from '../../store/search/actions';

const HeaderSearch: React.FC<IHeaderSearchProps> = ({ 
  isLoading, 
  suggestions,
  searchParams
}) => {
  const dispatch = useDispatch();
  const onSubmit = (values: FormikValues) => {
    dispatch(setSearchParams(
      formik.values.name, formik.values.location, searchParams.priceFrom, searchParams.priceTo 
    ));
  }
  const validate = (values: IFormikValues) => {
    const errors: FormikErrors<IFormikValues> = {};
    if (!values.name && !values.location) {
      if (!values.name) {
        values.name = null;
        errors.name = 'Empty';
      }
      if (!values.location) {
        values.location = null;
        errors.location = 'Empty';
      }
    }
    return errors;
  }
  const formik: FormikProps<IFormikValues> = useFormik<IFormikValues>({
    initialValues: {
      name: searchParams.keywords,
      location: searchParams.location,
    },
    validate: validate,
    onSubmit: onSubmit
  });

  useEffect(() => {
    if (formik?.values?.name) {
      dispatch(fetchSuggest(formik.values.name));
    }
  }, [formik.values.name, dispatch]);

  return <HeaderSearchComponent 
    formik={formik} 
    isLoading={isLoading} 
    suggestions={suggestions} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.searchSuggestions.isLoading,
  suggestions: state.searchSuggestions.suggestions,
  searchParams: state.search.searchParams,
})

export default connect(mapStateToProps)(HeaderSearch);
