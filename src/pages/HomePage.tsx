import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Products from '../components/Products/Products';
import { Header } from '../components/Header/Header';
import { Wrapper } from '../components/commons/Wrapper/Wrapper';
import SearchResults from '../components/SearchResults/SearchResults';
import { Footer } from '../components/Footer/Footer';

export const HomePage: React.FC = () => {
  const { showResults } = useTypedSelector((state) => state.search);
  return (
    <>
      <Header search filter/>
      <Wrapper>{showResults ? <SearchResults /> : <Products />}</Wrapper>
      <Footer />
    </>
  );
};
