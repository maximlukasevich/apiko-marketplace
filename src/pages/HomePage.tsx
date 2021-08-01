import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Products from '../components/Products/Products';
import { Header } from '../components/Header/Header';
import { Wrapper } from '../components/commons/Wrapper/Wrapper';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import SearchResults from '../components/SearchResults/SearchResults';
import { Filter } from '../components/Filter/Filter';

export const HomePage: React.FC = () => {
  const { showResults } = useTypedSelector(state => state.search);
  return ( <>
    <Header>
      <HeaderSearch />
      <Filter />
    </Header>
    <Wrapper>
      {showResults ? <SearchResults /> : <Products /> }
    </Wrapper>     
  </> );
}
