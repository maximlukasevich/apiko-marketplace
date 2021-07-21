import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Header } from '../components/Header/Header';
import { EditProfile } from '../components/EditProfile/EditProfile';

export const EditPropfilePage: React.FC = () => {

  const { isAuth, user } = useTypedSelector(state => state.user); 

  return (
    <div>
      {isAuth && <>
        <Header email={user?.email} fullName={user?.fullName} avatar={user?.avatar} isAuth={isAuth} />
        <EditProfile />
      </> }
      
    </div>   
  );
}