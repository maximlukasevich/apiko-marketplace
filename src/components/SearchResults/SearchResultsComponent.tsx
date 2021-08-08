import React from 'react';
import styles from './search-results.module.css';
import { ProductsWrapper } from '../commons/ProductsWrapper/ProductsWrapper';
import { ProductCard } from '../ProductCard/ProductCard';
import { ISearchResultsComponentProps } from './types';
import { Spinner } from '@chakra-ui/react';

export const ProductsComponent: React.FC<ISearchResultsComponentProps> = ({
  isLoading,
  isFetchedAll,
  searchResults,
  onClearSearchOptionClick,
}) => {
  return (
    <>
      <div className={styles.searchHeader}>
        <h2 className={styles.searchTitle}>
          Search results:{' '}
          <span>
            ({isFetchedAll ? searchResults.length : `${searchResults.length}+`})
          </span>
        </h2>
        <p onClick={onClearSearchOptionClick} className={styles.searchAction}>
          Clear search options
        </p>
      </div>
      <ProductsWrapper>
        {searchResults.map((item, key) => (
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
        {isLoading ? <Spinner size='md' color='#349a89' /> : ''}
        {/* {fetchAll ? 'That`s all' : ''} */}
      </div>
    </>
  );
};
