import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import styles from './header-search-suggestions.module.css';
import { ISuggestionsComponent } from './types';

export const HeaderSearchSuggestionsComponent: React.FC<ISuggestionsComponent> =
  ({ id, image, title, price, onError }) => {
    return (
      <>
        <NavLink
          to={routes.PRODUCT.replace(':id', id)}
          className={styles.suggestion}
        >
          <img
            className={styles.image}
            src={image}
            onError={onError}
            alt='Default'
          />
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.price}>${price}</p>
          </div>
        </NavLink>
      </>
    );
  };
