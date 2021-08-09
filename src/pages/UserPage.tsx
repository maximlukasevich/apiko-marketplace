import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import User from '../components/User/User';

export const UserPage = () => {
  return (
    <>
      <Header search />
      <User />
      <Footer />
    </>
  );
};
