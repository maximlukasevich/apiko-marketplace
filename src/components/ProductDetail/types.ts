import { IOneProduct } from '../../types/products';

export interface IParamTypes {
  id: string;
}

export interface IProductProps {
  product: IOneProduct;
  isLoading: boolean;
}

export interface IProductComponentProps extends IProductProps {
  saved: boolean;
  images: Array<string>;
  createdAt: string;
  isViewerOpen: boolean;
  currentImage: any;
  openImageViewer: (index: any) => void;
  closeImageViewer: () => void;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  onSaveButtonClick: () => void;
}