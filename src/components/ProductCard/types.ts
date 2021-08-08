export interface IProductsCardProps {
  id: string;
  images: any;
  title: string;
  location: string;
  createdDate: number | string;
  price: number;
  saved: boolean;
}

export interface IProductsCardComponentProps extends IProductsCardProps {
  onSavedIconClick: () => void;
  onError: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}
