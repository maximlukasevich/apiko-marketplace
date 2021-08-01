import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserComponent from './UserComponent';
import { fetchUser, fetchUserProducts } from '../../store/user/actions';
import { RootState } from '../../store/indexReducer';
import { IUserProps } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const User: React.FC<IUserProps> = ({
  user,
  userProducts,
  isLoading,
  sales
}) => {
  const { isAuth } = useTypedSelector(state => state.currentUser);
  const { id } = useParams<{id: string}>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchUserProducts(id));
  }, [dispatch, id, isAuth]);
  return <UserComponent 
    user={user}
    userProducts={userProducts}
    isLoading={isLoading}
    sales={sales} />;
}

const mapStateToProps = (state: RootState) => ({
  user: state.user.user,
  userProducts: state.user.userProducts,
  isLoading: state.user.isLoading,
  sales: state.user.sales,
});

export default connect(mapStateToProps)(User);