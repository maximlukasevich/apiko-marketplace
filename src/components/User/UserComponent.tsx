import styles from './user.module.css';
import { Wrapper } from '../commons/Wrapper/Wrapper';
import { Avatar } from '../commons/Avatar/Avatar';
import { ProductsWrapper } from '../commons/ProductsWrapper/ProductsWrapper';
import { ProductCard } from '../ProductCard/ProductCard';
import { IUserProps } from './types';
import { Spinner } from '@chakra-ui/spinner';

const UserComponent: React.FC<IUserProps> = ({
  user,
  userProducts,
  isLoading,
  sales
}) => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <div className={styles.info}>
          {isLoading ? <Spinner size='md' color='#349a89' /> : <>
          <Avatar 
            className={styles.avatar} 
            avatar={user.avatar}
            name={user.fullName} 
            size='xl' />
          <h2 className={styles.name}>{user.fullName}</h2>
          <p className={styles.location}>{user.location}</p>

          <div className={styles.statsBlock}>
            <div className={styles.stats}>
              <p className={styles.feedback}>88%</p>
              <p className={styles.bottomText}>Positive feedback</p>
            </div>
            <div className={styles.stats}>
              <p className={styles.sales}>{sales}</p>
              <p className={styles.bottomText}>Sales</p>
            </div>
            <div className={[styles.stats, styles.active].join(' ')}>
              <p className={styles.activeCount}>{userProducts.length}</p>
              <p className={styles.activeBottom}>Active listings</p>
            </div>
          </div>
          </>}
        </div>
        <ProductsWrapper>
          {userProducts.map((item, key) => 
            <ProductCard 
              id={item.id}
              images={item.photos}
              title={item.title}
              location={item.location}
              createdDate={item.createdAt}
              price={item.price}
              saved={item.saved}
              key={key} />
          )}
        </ProductsWrapper>

      </Wrapper>
    </div>
  );
}

export default UserComponent;