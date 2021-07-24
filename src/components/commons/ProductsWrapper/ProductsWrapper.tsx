import React from 'react';
import styles from './products-wrapper.module.css';

export const ProductsWrapper: React.FC = ({ children }) => {
  return <div className={styles.productsWrapper}>{children}</div>; 
}