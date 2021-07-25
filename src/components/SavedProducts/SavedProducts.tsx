import React, { useEffect } from 'react';
import { SavedProductsComponent } from './SavedProductsComponent';
import { RootState } from '../../store/indexReducer';
import { connect, useDispatch } from 'react-redux';
import { ISavedProductsProps } from './types';
import { fetchSaved } from '../../store/saved/actions';

const SavedProducts: React.FC<ISavedProductsProps> = ({ isLoading, saved }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSaved());
  }, [dispatch])
  return <SavedProductsComponent isLoading={isLoading} saved={saved} />
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.saved.isLoading,
  saved: state.saved.saved
});

export default connect(mapStateToProps)(SavedProducts);