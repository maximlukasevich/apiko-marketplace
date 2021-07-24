import React from 'react';
import { Header } from '../components/Header/Header';
import { Wrapper } from '../components/commons/Wrapper/Wrapper';
import Products from '../components/Products/Products';

export const HomePage: React.FC = () => {
  
  return ( <>
    <Header />
    <Wrapper>
      <Products />
    </Wrapper>     
  </> );
}
