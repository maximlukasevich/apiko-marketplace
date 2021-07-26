export interface IProductsCardProps {
  images: any;
  title: string;
  location: string;
  createdDate: number;
  price: number;
  saved: boolean;
}

export interface IProductsCartComponentProps {
  image: string;
  title: string;
  location: string;
  createdDate: string;
  price: number;
  saved: boolean;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}