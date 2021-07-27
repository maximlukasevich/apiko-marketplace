import React from 'react';
import styles from './header-search-suggestions.module.css';
import { IHeaderSearchSuggestionsComponentProps } from './types';

export const HeaderSearchSuggestionsComponent: React.FC<IHeaderSearchSuggestionsComponentProps> = ({
  image, title, price, 
  onError
}) => {
  return ( <>
    <div className={styles.suggestion}>
      <img className={styles.image} src={image} onError={onError} alt="Default" />
      <div className={styles.textContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>${price}</p>  
      </div>
    </div>
  </>);
}
