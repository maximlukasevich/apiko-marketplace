import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Register } from '../components/Register/Register';

export const RegisterPage: React.FC = () => {
  return (
    <>
      <Header light />
      <Register />
      <Footer />
    </>
  );
};
