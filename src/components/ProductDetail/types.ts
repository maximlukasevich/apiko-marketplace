import { IOneProduct } from '../../types/products';

export interface IParamTypes {
  id: string;
}

export interface IProductProps {
  product: IOneProduct;
  isLoading: boolean;
}

export interface IProductComponentProps {
  product: IOneProduct;
  isLoading: boolean;
  saved: boolean;
  image: string;
  createdAt: string;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  onSaveButtonClick: () => void;
}