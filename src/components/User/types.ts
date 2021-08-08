import { IProduct } from '../../types/products';
import { IViewer } from '../../types/viewer';
export interface IUserProps {
  user: IViewer;
  userProducts: Array<IProduct>;
  isLoading: boolean;
  sales: number;
  isAuth?: boolean;
}
