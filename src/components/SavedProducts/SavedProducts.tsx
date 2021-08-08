import React, { useEffect } from 'react';
import { SavedProductsComponent } from './SavedProductsComponent';
import { RootState } from '../../store/indexReducer';
import { connect, useDispatch } from 'react-redux';
import { ISavedProductsProps } from './types';
import { fetchSaved } from '../../store/saved/actions';

const SavedProducts: React.FC<ISavedProductsProps> = ({ isAuth, isLoading, saved }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSaved());
  }, [dispatch, isAuth])
  return <SavedProductsComponent isLoading={isLoading} saved={saved} isAuth={isAuth} />
}

const mapStateToProps = (state: RootState) => ({
  isAuth: state.viewer.isAuth,
  isLoading: state.saved.isLoading,
  saved: state.saved.saved
});

export default connect(mapStateToProps)(SavedProducts);