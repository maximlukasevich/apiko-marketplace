import React from 'react';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';

export const LoginPage: React.FC = () => {
  return (
    <>
      <Header light />
      <Login />
    </>
  );
}