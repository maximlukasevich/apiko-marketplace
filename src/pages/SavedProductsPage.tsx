import React from 'react';
import { Header } from '../components/Header/Header';
import SavedProducts from '../components/SavedProducts/SavedProducts';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';

export const SavedProductsPage = () => {
  return ( <>
    <Header>
      <HeaderSearch />
    </Header> 
    <SavedProducts />
  </> );
}

