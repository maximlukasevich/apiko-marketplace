import { Header } from '../components/Header/Header';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export const ProductPage = () => {
  return ( <>
    <Header>
        <HeaderSearch />
    </Header>
    <ProductDetail />
  </> );
}