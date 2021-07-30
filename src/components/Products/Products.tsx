import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../store/products/actions';
import { connect, useDispatch } from 'react-redux';
import { ProductsComponent } from './ProductsComponent';
import { usePageBottom } from '../../hooks/usePageBottom';
import { RootState } from '../../store/indexReducer';
import { IProductsProps } from './types';

const Products: React.FC<IProductsProps> = ({ 
  isLoading, 
  fetchAll, 
  products, 
  isAuth,
}) => {
  const [screen, setScreen] = useState<number>(0);
  const isBottom = usePageBottom();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isBottom && !fetchAll) {
      setScreen(prevState => prevState + 1);
    }
  }, [isBottom, fetchAll]);
  useEffect(() => {
    dispatch(fetchProducts(screen));
  }, [dispatch, screen]);
  useEffect(() => {
    setScreen(0);
  }, [isAuth]);

  return <ProductsComponent isLoading={isLoading} fetchAll={fetchAll} products={products} />;
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.products.isLoading,
  fetchAll: state.products.fetchAll,
  products: state.products.products,
  isAuth: state.currentUser.isAuth,
});

export default connect(mapStateToProps)(Products);