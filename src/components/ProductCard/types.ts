export interface IProductsCardProps {
  id: string;
  images: any;
  title: string;
  location: string;
  createdDate: number;
  price: number;
  saved: boolean;
}

export interface IProductsCartComponentProps {
  id: string;
  image: string;
  title: string;
  location: string;
  createdDate: string;
  price: number;
  saved: boolean;
  onSavedIconClick: () => void;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}