import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../store/products/actions';
import { connect, useDispatch } from 'react-redux';
import { ProductsComponent } from './ProductsComponent';
import { usePageBottom } from '../../hooks/usePageBottom';
import { RootState } from '../../store/indexReducer';
import { IProductsProps } from './types';

const Products: React.FC<IProductsProps> = ({ 
  isLoading, 
  isFetchedAll, 
  products, 
  isAuth,
}) => {
  const [screen, setScreen] = useState<number>(0);
  const isBottom = usePageBottom();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isBottom && !isFetchedAll) {
      setScreen(prevState => prevState + 1);
    }
  }, [isBottom, isFetchedAll]);
  useEffect(() => {
    dispatch(fetchProducts(screen));
  }, [dispatch, screen]);
  useEffect(() => {
    setScreen(0);
  }, [isAuth]);

  return <ProductsComponent 
    isLoading={isLoading} 
    isFetchedAll={isFetchedAll} 
    products={products} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.products.isLoading,
  isFetchedAll: state.products.isFetchedAll,
  products: state.products.products,
  isAuth: state.viewer.isAuth,
});

export default connect(mapStateToProps)(Products);