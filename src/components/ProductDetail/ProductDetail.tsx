import React, { useEffect, useState } from 'react';
import { useDispatch, connect} from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ProductDetailComponent } from './ProductDetailComponent';
import { useParams } from 'react-router';
import { fetchOneProduct } from '../../store/products/actions';
import { IParamTypes, IProductProps } from './types';
import { unsaveProduct, saveProduct } from '../../store/saved/actions';
import { sendNotificationError } from '../../store/notifications/actions';
import { RootState } from '../../store/indexReducer';
import defaultImage from '../../assets/defaultImage.png';
import moment from 'moment';

const ProductDetail: React.FC<IProductProps> = ({ product, isLoading }) => {
  const { isAuth } = useTypedSelector(state => state.user);
  const [productSaved, setProductSaved] = useState(product.saved);
  const { id } = useParams<IParamTypes>();
  const dispatch = useDispatch();
  let image = defaultImage;
  if (product && product?.photos?.length > 0) {
    image = product.photos[0];
  } else if (typeof product?.photos === 'string') {
    image = product.photos;
  }

  const createdDate = moment(product.createdAt).fromNow()
  + ' - ' + moment(product.createdAt).format('DD.MM.YYYY, hh:mm')

  const onError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = defaultImage;
  }

  const onSaveButtonClick = () => {
    if (isAuth) {
      setProductSaved(!productSaved);
      if (product.saved) {
        dispatch(unsaveProduct(id));
      } else {
        dispatch(saveProduct(id));
      }
    } else {
      dispatch(sendNotificationError('To save the product you need to log in or register'));
    }
  }

  useEffect(() => {
    setProductSaved(product.saved);
  }, [product]);

  useEffect(() => {
    dispatch(fetchOneProduct(id));
  }, [isAuth, dispatch, id]);

  return <ProductDetailComponent 
    product={product}
    isLoading={isLoading}
    saved={productSaved}
    createdAt={createdDate}
    image={image}
    onError={onError}
    onSaveButtonClick={onSaveButtonClick} />;
}

const mapStateToProps = (state: RootState) => ({
  product: state.products.oneProduct,
  isLoading: state.products.isLoading,
});

export default connect(mapStateToProps)(ProductDetail);