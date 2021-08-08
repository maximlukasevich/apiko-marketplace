import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { clearRecents } from '../../store/search-recents/actions';
import { RootState } from '../../store/indexReducer';
import { HeaderSearchRecentsComponent } from './HeaderSearchRecentsComponent';
import { IRecentsProps } from './types';

const HeaderSearchRecents: React.FC<IRecentsProps> = ({ recents }) => {
  const dispatch = useDispatch();
  const onClearAllClick = () => {
    dispatch(clearRecents());
  };
  return (
    <HeaderSearchRecentsComponent
      recents={recents}
      onClearAllClick={onClearAllClick}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  recents: state.searchRecents.recents,
});

export default connect(mapStateToProps)(HeaderSearchRecents);
