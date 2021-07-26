import React from 'react';
import styles from './products.module.css';
import { ProductsWrapper } from '../commons/ProductsWrapper/ProductsWrapper';
import { ProductCard } from '../ProductCard/ProductCard';
import { IProductsProps } from './types';
import { Spinner } from '@chakra-ui/react';

export const ProductsComponent: React.FC<IProductsProps> = ({ isLoading, fetchAll, products }) => {
  return ( <>
    <ProductsWrapper>
      {products.map((item, key) => 
        <ProductCard 
          images={item.photos}
          title={item.title}
          location={item.location}
          createdDate={item.createdAt}
          price={item.price}
          saved={item.saved}
          key={key}
        />
      )}
    </ProductsWrapper >   
    <div className={styles.spinner}>
        {isLoading ? <Spinner size='md' color='#349a89' /> : '' }
    </div>
    {fetchAll ? 'That`s all' : ''}
  </> );
}