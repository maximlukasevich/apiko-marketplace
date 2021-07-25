import { ISaved } from '../../types/saved';
export interface ISavedProductsProps {
  isAuth: boolean;
  isLoading: boolean;
  saved: Array<ISaved>;
}