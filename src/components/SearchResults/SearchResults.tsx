import React, { useState, useEffect } from 'react';
import { deleteSearchParams } from '../../store/search/actions';
import { connect, useDispatch } from 'react-redux';
import { ProductsComponent } from './SearchResultsComponent';
import { usePageBottom } from '../../hooks/usePageBottom';
import { RootState } from '../../store/indexReducer';
import { ISearchResultsProps } from './types';
import { search } from '../../store/search/actions';

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
    dispatch(deleteSearchParams());
  }

  useEffect(() => {
    if (isBottom && !fetchAll) {
      setScreen(prevState => prevState + 1);
    }
  }, [isBottom, fetchAll]);

  useEffect(() => {
    dispatch(search(
      searchParams.keywords, 
      searchParams.location, 
      searchParams.priceFrom, 
      searchParams.priceTo, 
      screen,
    ));
  }, [dispatch, screen, searchParams]);

  useEffect(() => {
    setScreen(0);
  }, [isAuth, searchParams]);

  return <ProductsComponent 
    isLoading={isLoading} 
    fetchAll={fetchAll} 
    searchResults={searchResults}
    onClearSearchOptionClick={onClearSearchOptionClick} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.search.isLoading,
  fetchAll: state.search.fetchAll,
  searchResults: state.search.searchResults,
  searchParams: state.search.searchParams,
  isAuth: state.currentUser.isAuth,
});

export default connect(mapStateToProps)(Products);