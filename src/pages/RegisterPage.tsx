import React from 'react';
import { Header } from '../components/Header/Header';
import { Register } from '../components/Register/Register';

export const RegisterPage: React.FC = () => {
  return (
    <>
      <Header light />
      <Register />
    </>
  );
};
