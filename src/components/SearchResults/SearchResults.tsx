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
  isFetchedAll, 
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
    if (isBottom && !isFetchedAll) {
      setScreen(prevState => prevState + 1);
    }
  }, [isBottom, isFetchedAll]);

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
    isFetchedAll={isFetchedAll} 
    searchResults={searchResults}
    onClearSearchOptionClick={onClearSearchOptionClick} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.search.isLoading,
  isFetchedAll: state.search.isFetchedAll,
  searchResults: state.search.searchResults,
  searchParams: state.search.searchParams,
  isAuth: state.viewer.isAuth,
});

export default connect(mapStateToProps)(Products);