import React, { useEffect, useState, useCallback } from 'react';
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


const ProductDetail: React.FC<IProductProps> = ({ 
  product, 
  isLoading,
}) => {
  const isAuth = useTypedSelector(state => state.viewer.isAuth);
  const [productSaved, setProductSaved] = useState(product.saved);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const { id } = useParams<IParamTypes>();
  const dispatch = useDispatch();

  let images: Array<string> = [];
  if (product.photos) {
    if (typeof product?.photos === 'object') {
      if (product?.photos?.length === 0) {
        images.push(defaultImage);
      } else {
        images = product.photos;
      }
    } else if (typeof product?.photos === 'string') {
      images.push(product.photos);
    }
  } else {
    images.push(defaultImage);
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
    images={images}
    onError={onError}
    isViewerOpen={isViewerOpen}
    currentImage={currentImage}
    openImageViewer={openImageViewer}
    closeImageViewer={closeImageViewer}
    onSaveButtonClick={onSaveButtonClick} />;
}

const mapStateToProps = (state: RootState) => ({
  product: state.products.oneProduct,
  isLoading: state.products.isLoading,
});

export default connect(mapStateToProps)(ProductDetail);