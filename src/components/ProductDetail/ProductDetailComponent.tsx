import styles from './product-detail.module.css';
import locationIcon from '../../assets/icons/location_filled.svg';
import savedIcon from '../../assets/icons/product-saved.svg';
import unsavedIcon from '../../assets/icons/productShape.svg';
import { Avatar } from '../../components/commons/Avatar/Avatar';
import { IProductComponentProps } from './types';
import { Wrapper } from '../commons/Wrapper/Wrapper'
import { Button } from '../commons/Button/Button';
import { Spinner } from '@chakra-ui/spinner';

export const ProductDetailComponent: React.FC<IProductComponentProps> = ({ 
  isLoading,
  product, 
  saved,
  image,
  createdAt,
  onError,
  onSaveButtonClick
}) => {
  return (
    <Wrapper>
      {!isLoading ?
        product.title ? 
          <div className={styles.container}>
            <div className={styles.product}>
              <div className={styles.imageBlock}>
                <img 
                  className={styles.productImage} 
                  src={image} 
                  onError={onError}
                  alt='Product' />
                <div className={styles.price}>${product?.price}</div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.row}>
                  <h2>{product?.title}</h2>
                  <p>{createdAt}</p>
                </div>
                <div className={styles.row}>
                  <img src={locationIcon} alt="Location icon" />
                  <p>{product?.location}</p>
                </div>
                <p className={styles.description}>
                  {product?.description}
                </p>
              </div>
            </div>
            <div className={styles.other}>
              <div className={styles.owner}>
                <span className={styles.header}> </span>
                <div className={styles.ownerInfo}>
                  <Avatar 
                    className={styles.avatar} 
                    avatar={product?.owner.avatar} 
                    name={product?.owner?.fullName || ''} 
                    size='xl' />
                  <h2 className={styles.fullName}>{product?.owner.fullName}</h2>
                  <p className={styles.location}>{product?.owner.location}</p>
                </div>
                <Button className={styles.chatButton}>
                  Chat with seller
                </Button>
                <Button className={styles.favoriteButton}>
                  <div className={styles.favoriteButtonContent} onClick={onSaveButtonClick}>
                    <img 
                      className={styles.favoriteIcon} 
                      src={saved ? savedIcon : unsavedIcon} 
                      alt="Like" />
                    {saved ? 'In favorite' : 'Add to favorive' }
                  </div>
                </Button>
              </div>
            </div>
          </div>
        : <div className={styles.center}>
            <p>Product not found</p>
          </div> 
      : 
      <div className={styles.center}>
        <Spinner size='xl' color='#349a89' />
      </div>  }
    </Wrapper>
  );
}