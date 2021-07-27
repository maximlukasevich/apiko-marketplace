import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Products from '../components/Products/Products';
import { Header } from '../components/Header/Header';
import { Wrapper } from '../components/commons/Wrapper/Wrapper';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import SearchResults from '../components/SearchResults/SearchResults';

export const HomePage: React.FC = () => {
  const { search } = useTypedSelector(state => state.search);
  return ( <>
    <Header>
      <HeaderSearch />
    </Header>
    <Wrapper>
      {search ? <SearchResults /> : <Products />}
    </Wrapper>     
  </> );
}
