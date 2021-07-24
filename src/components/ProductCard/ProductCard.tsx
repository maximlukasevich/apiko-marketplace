import React from 'react';
import { ProductCardComponent } from './ProductCardComponent';
import { IProductsCardProps } from './types';
import defaultImage from '../../assets/defaultImage.png';

export const ProductCard: React.FC<IProductsCardProps> = ({ 
  images, title, location, 
  createdDate, price, saved
}) => {

  const date = new Date(createdDate);
  const _createdDate = date.toLocaleDateString();

  let image = defaultImage;
  if (images?.length > 0) {
    image = images[0];
  } else if (typeof images === 'string') {
    image = images;
  }

  const onError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = defaultImage;
  }
  
  return <ProductCardComponent 
    image={image}
    title={title} 
    location={location} 
    price={price} 
    saved={saved} 
    createdDate={_createdDate}
    onError={onError} />
}

