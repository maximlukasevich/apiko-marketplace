import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ProductCardComponent } from './ProductCardComponent';
import { IProductsCardProps } from './types';
import defaultImage from '../../assets/defaultImage.png';
import { routes } from '../../utils/routes';
import { unsaveProduct, saveProduct } from '../../store/saved/actions';
import { sendNotificationError } from '../../store/notifications/actions';

export const ProductCard: React.FC<IProductsCardProps> = ({ 
  id, images, title, 
  location, createdDate, price, 
  saved
}) => {
  const { isAuth } = useTypedSelector(state => state.user);
  const [productSaved, setProductSaved] = useState(saved);
  const date = new Date(createdDate);
  const _createdDate = date.toLocaleDateString();
  const webLocation = useLocation();
  const dispatch = useDispatch();

  const onSavedIconClick = () => {
    if (isAuth) {
      if (webLocation?.pathname === routes.SAVED) {
        if (saved) {
          dispatch(unsaveProduct(id));
        }
      } else {
        setProductSaved(!productSaved);
        if (saved) {
          dispatch(unsaveProduct(id));
        } else {
          dispatch(saveProduct(id));
        }
      }
    } else {
      dispatch(sendNotificationError('To save the product you need to log in or register'));
    }
  }

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
    saved={productSaved} 
    onSavedIconClick={onSavedIconClick}
    createdDate={_createdDate}
    onError={onError} />
}

