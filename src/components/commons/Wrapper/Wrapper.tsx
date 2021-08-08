import React from 'react';
import styles from './wrapper.module.css';

interface IWrapper {
  className?: string;
}

export const Wrapper: React.FC<IWrapper> = ({ className, children }) => {
  return (
    <div className={[styles.wrapper, className].join(' ')}>{children}</div>
  );
};
