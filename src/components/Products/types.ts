import { IProduct } from '../../types/products';
export interface IProductsProps {
  isAuth?: boolean;
  isLoading: boolean;
  isFetchedAll: boolean;
  products: Array<IProduct>;
} 