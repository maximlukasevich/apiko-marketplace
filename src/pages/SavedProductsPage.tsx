import React from 'react';
import { Header } from '../components/Header/Header';
import SavedProducts from '../components/SavedProducts/SavedProducts';
import { Footer } from '../components/Footer/Footer';

export const SavedProductsPage = () => {
  return (
    <>
      <Header search />
      <SavedProducts />
      <Footer />
    </>
  );
};
