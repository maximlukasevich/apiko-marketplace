import React, { useState, useEffect } from 'react';
import { clearSearchParams, search } from '../../store/search/actions';
import { connect, useDispatch } from 'react-redux';
import { ProductsComponent } from './SearchResultsComponent';
import { usePageBottom } from '../../hooks/usePageBottom';
import { RootState } from '../../store/indexReducer';
import { ISearchResultsProps } from './types';

const Products: React.FC<ISearchResultsProps> = ({ 
  isLoading, 
  fetchAll, 
  searchParams,
  searchResults, 
  isAuth,
}) => {
  const [screen, setScreen] = useState<number>(0);
  const isBottom = usePageBottom();
  const dispatch = useDispatch();

  const onClearSearchOptionClick = () => {
    dispatch(clearSearchParams());
  }

  useEffect(() => {
    if (isBottom && !fetchAll) {
      setScreen(prevState => prevState + 1);
    }
  }, [isBottom, fetchAll]);

  useEffect(() => {
    if (
      searchParams.keywords || 
      searchParams.location || 
      searchParams.priceFrom || 
      searchParams.priceTo
    ) {
      dispatch(search(
        searchParams.keywords,
        searchParams.location,
        searchParams.priceFrom,
        searchParams.priceTo,
        screen
      ));
    }
    
  }, [dispatch, screen, searchParams, isAuth]);

  useEffect(() => {
    setScreen(0);
  }, [isAuth]);

  return <ProductsComponent 
    isLoading={isLoading} 
    fetchAll={fetchAll} 
    searchResults={searchResults}
    onClearSearchOptionClick={onClearSearchOptionClick} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.search.isLoading,
  fetchAll: state.search.fetchAll,
  searchResults: state.search.searchResult,
  searchParams: state.search.searchParams,
  isAuth: state.currentUser.isAuth,
});

export default connect(mapStateToProps)(Products);