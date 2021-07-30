import { IUser, IUserProducts } from '../../types/user';

export interface IUserProps {
  user: IUser;
  userProducts: Array<IUserProducts>;
  isLoading: boolean;
  sales: number;
}