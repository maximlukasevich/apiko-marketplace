import React from 'react';
import HeaderComponent from "./HeaderComponent";

interface IHeader {
  light?: boolean,
  isAuth?: boolean,
  fullName?: string,
  email?: string,
  avatar?: string,
}

export const Header: React.FC<IHeader> = ({ light, email, fullName, avatar, isAuth, children }) => {
  return <HeaderComponent 
    email={email}
    fullName={fullName} 
    light={light} 
    avatar={avatar}
    isAuth={isAuth}>
      {children}
    </HeaderComponent>  
}