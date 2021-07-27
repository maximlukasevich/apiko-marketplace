import React from 'react';
import defaultImage from '../../assets/defaultImage.png';
import { HeaderSearchSuggestionsComponent } from "./HeaderSearchSuggestionsComponent";
import { IHeaderSearchSuggestionsProps } from './types';

export const HeaderSearchSuggestions: React.FC<IHeaderSearchSuggestionsProps> = ({ 
  photos, title, price
}) => {
  let image = defaultImage;
  if (photos?.length > 0) {
    image = photos[0];
  } else if (typeof photos === 'string') {
    image = photos;
  }
  const onError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = defaultImage;
  }

  return <HeaderSearchSuggestionsComponent 
    image={image}
    title={title} 
    price={price}
    onError={onError} />;
}




