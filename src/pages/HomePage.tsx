import React from 'react';
import { Header } from '../components/Header/Header';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const HomePage: React.FC = () => {
  const { user, isAuth } = useTypedSelector(state => state.user);
  return (
    <>
      <Header email={user?.email} fullName={user?.fullName} avatar={user?.avatar} isAuth={isAuth} />
    </>
  );
}
