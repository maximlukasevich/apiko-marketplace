import React from 'react';
import styles from './product-detail.module.css';
import locationIcon from '../../assets/icons/location_filled.svg';
import savedIcon from '../../assets/icons/product-saved.svg';
import unsavedIcon from '../../assets/icons/productShape.svg';
import { Avatar } from '../../components/commons/Avatar/Avatar';
import { IProductComponentProps } from './types';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { Button } from '../commons/Button/Button';
import { Spinner } from '@chakra-ui/spinner';
import ImageViewer from 'react-simple-image-viewer';
import { routes } from '../../utils/routes';
import { generatePath, NavLink } from 'react-router-dom';
import { MessageModal } from '../MessageModal/MessageModal';

export const ProductDetailComponent: React.FC<IProductComponentProps> = ({
  isLoading,
  product,
  saved,
  images,
  createdAt,
  isViewerOpen,
  openImageViewer,
  closeImageViewer,
  currentImage,
  onError,
  onSaveButtonClick,
}) => {
  return (
    <Wrapper>
      {!isLoading ? (
        product.title ? (
          <div className={styles.container}>
            <div className={styles.product}>
              <div className={styles.imageBlock}>
                <img
                  className={styles.productImage}
                  src={images[0]}
                  onError={onError}
                  onClick={() => openImageViewer(0)}
                  alt='Product'
                />
                {isViewerOpen && (
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                  />
                )}

                <div className={styles.price}>${product?.price}</div>
              </div>

              <div className={styles.content}>
                <div className={styles.row}>
                  <h2>{product?.title}</h2>
                  <p>{createdAt}</p>
                </div>
                <div className={styles.row}>
                  <img src={locationIcon} alt='Location icon' />
                  <p>{product?.location}</p>
                </div>
                <p className={styles.description}>{product?.description}</p>
              </div>
            </div>
            <div className={styles.other}>
              <div className={styles.owner}>
                <span className={styles.header}> </span>
                <NavLink
                  to={generatePath(routes.USER_PAGE, { id: product.owner.id })}
                >
                  <div className={styles.ownerInfo}>
                    <Avatar
                      className={styles.avatar}
                      avatar={product?.owner.avatar}
                      name={product?.owner?.fullName || ''}
                      size='xl'
                    />
                    <h2 className={styles.fullName}>
                      {product?.owner.fullName}
                    </h2>
                    <p className={styles.location}>{product?.owner.location}</p>
                  </div>
                </NavLink>

                <MessageModal
                  id={product.id}
                  subject={product.title}
                  avatar={product.owner.avatar}
                  fullName={product.owner.fullName}
                  location={product.owner.location}
                >
                  <Button className={styles.chatButton}>
                    Chat with seller
                  </Button>
                </MessageModal>
                <Button className={styles.favoriteButton}>
                  <div
                    className={styles.favoriteButtonContent}
                    onClick={onSaveButtonClick}
                  >
                    <img
                      className={styles.favoriteIcon}
                      src={saved ? savedIcon : unsavedIcon}
                      alt='Like'
                    />
                    {saved ? 'In favorite' : 'Add to favorive'}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.center}>
            <p>Product not found</p>
          </div>
        )
      ) : (
        <div className={styles.center}>
          <Spinner size='xl' color='#349a89' />
        </div>
      )}
    </Wrapper>
  );
};
