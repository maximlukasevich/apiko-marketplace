import React from 'react';
import styles from './product-card.module.css';
import { IProductsCartComponentProps } from './types';
import unsavedIcon from '../../assets/icons/product-unsaved.svg';
import savedIcon from '../../assets/icons/product-saved.svg';

export const ProductCardComponent: React.FC<IProductsCartComponentProps> = ({ 
  image, title, location, 
  createdDate, price, saved,
  onError, onSavedIconClick
}) => {
  return ( <>
    <div className={styles.productCart}>
      <div className={styles.imageBlock}>
        <img className={styles.productImage} src={image} onError={onError} alt="Product" />
        <div className={styles.circle} onClick={onSavedIconClick}>
          <img className={styles.savedIcon} src={saved ? savedIcon : unsavedIcon} alt="Like" />
        </div>
      </div>
      <div className={styles.infoBlock}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.bottomInfo}>
          <div className={styles.locationDate}>
            <p className={styles.location}>{location}</p>
            <p className={styles.date}>{createdDate}</p>
          </div>
          <p className={styles.price}>${price}</p>
        </div>
      </div>
    </div>
  </>);
}

