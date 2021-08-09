import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export const ProductPage = () => {
  return (
    <>
      <Header search />
      <ProductDetail />
      <Footer />
    </>
  );
};
