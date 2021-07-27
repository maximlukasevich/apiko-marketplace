import { IProduct } from '../../types/products';
export interface IProductsProps {
  isAuth?: boolean;
  isLoading: boolean;
  fetchAll: boolean;
  products: Array<IProduct>;
} 