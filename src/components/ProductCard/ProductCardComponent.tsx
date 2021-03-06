import React from 'react';
import styles from './product-card.module.css';
import { IProductsCardComponentProps } from './types';
import unsavedIcon from '../../assets/icons/product-unsaved.svg';
import savedIcon from '../../assets/icons/product-saved.svg';
import { routes } from '../../utils/routes';
import { generatePath, NavLink } from 'react-router-dom';

export const ProductCardComponent: React.FC<IProductsCardComponentProps> = ({
  id,
  images,
  title,
  location,
  createdDate,
  price,
  saved,
  onError,
  onSavedIconClick,
}) => {
  return (
    <>
      <div className={styles.productCart}>
        <div className={styles.imageBlock}>
          <NavLink to={generatePath(routes.PRODUCT, { id: id })}>
            <img
              className={styles.productImage}
              src={images}
              onError={onError}
              alt='Product'
            />
          </NavLink>
          <div className={styles.circle} onClick={onSavedIconClick}>
            <img
              className={styles.savedIcon}
              src={saved ? savedIcon : unsavedIcon}
              alt='Like'
            />
          </div>
        </div>
        <div className={styles.infoBlock}>
          <NavLink to={generatePath(routes.PRODUCT, { id: id })}>
            <h2 className={styles.title}>{title}</h2>
          </NavLink>
          <div className={styles.bottomInfo}>
            <div className={styles.locationDate}>
              <p className={styles.location}>{location}&nbsp;</p>
              <p className={styles.date}>- {createdDate}</p>
            </div>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
