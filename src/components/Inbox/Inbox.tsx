import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { InboxComponent } from './InboxComponent';
import { useLocation } from 'react-router';
import { routes } from '../../utils/routes';
import { fetchChats } from '../../store/chats/actions';
import { IInboxProps } from './types';
import { RootState } from '../../store/indexReducer';

export const Inbox: React.FC<IInboxProps> = ({ chats, isChatsLoading }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [showChats, setShowChats] = useState(false);

  useEffect(() => {
    if (location.pathname === routes.INBOX) {
      setShowChats(true);
    } else {
      setShowChats(false);
    }
  }, [location]);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <InboxComponent
      showChats={showChats}
      isChatsLoading={isChatsLoading}
      chats={chats}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  isChatsLoading: state.chats.isChatsLoading,
  chats: state.chats.chats,
});

export default connect(mapStateToProps)(Inbox);
