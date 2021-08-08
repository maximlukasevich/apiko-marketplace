import { IProduct } from '../../types/products';
export interface ISavedProductsProps {
  isAuth: boolean;
  isLoading: boolean;
  saved: Array<IProduct>;
}