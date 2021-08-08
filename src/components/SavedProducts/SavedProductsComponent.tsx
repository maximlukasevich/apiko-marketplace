import React from 'react';
import styles from './saved-products.module.css';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { ProductsWrapper } from '../commons/ProductsWrapper/ProductsWrapper';
import { ProductCard } from '../ProductCard/ProductCard';
import { ISavedProductsProps } from './types';
import { Spinner } from '../commons/Spinner/Spinner';

export const SavedProductsComponent: React.FC<ISavedProductsProps> = ({
  isAuth,
  isLoading,
  saved,
}) => {
  return (
    <div className={styles.savedContainer}>
      <Wrapper>
        <h2 className={styles.savedTitle}>
          Saved items <span className={styles.count}>({saved.length})</span>
        </h2>
        {isAuth ? (
          <>
            <ProductsWrapper>
              {saved.map((item, key) => (
                <ProductCard
                  id={item.id}
                  images={item.photos}
                  title={item.title}
                  location={item.location}
                  createdDate={item.createdAt}
                  price={item.price}
                  saved={item.saved}
                  key={key}
                />
              ))}
            </ProductsWrapper>
            <div className={styles.spinner}>
              {isLoading ? <Spinner /> : ''}
            </div>
          </>
        ) : (
          <>
            <p className={styles.noAuth}>
              You need to log in or register to view saved products
            </p>
          </>
        )}
      </Wrapper>
    </div>
  );
};
