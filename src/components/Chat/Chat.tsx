import React, { useEffect, useRef } from 'react';
import { FormikProps, FormikValues, useFormik, FormikErrors } from 'formik';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMessages, fetchMessagesRealtime, sendMessage } from '../../store/messages/actions';
import { RootState } from '../../store/indexReducer';
import { ChatComponent } from './ChatComponent';
import { IChatProps, IFormikInitialValues } from './types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import io from 'socket.io-client';
import { fetchChats } from '../../store/chats/actions';

const Chat: React.FC<IChatProps> = ({
  chats,
  messages,
  isFetchedAll,
  isLoading,
}) => {
  const { id }: { id: string } = useParams();
  const userId = useTypedSelector(state => state.viewer.viewer.id);
  const chatBottomRef: any = useRef({});
  const dispatch = useDispatch();
  const chatId = chats.findIndex(chat => chat.id === id);

  const onSubmit = (values: FormikValues) => {
    scrollToChatBottom();
    const text = values.text;
    values.text = '';
    dispatch(sendMessage(id, text, userId));
  }

  const scrollToChatBottom = () => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  } 

  const fetchMore = () => {
    dispatch(fetchMessages(id, messages[messages.length - 1].id));
  }

  useEffect(() => {
    dispatch(fetchChats());
    dispatch(fetchMessages(id, null));
  }, [dispatch, id]);

  useEffect(() => {
      const socket = io('https://apiko-marketplace-api-2019.herokuapp.com', {
        query: {
          token: localStorage.getItem('token') || ''
        },
        transports: ['websocket']
      });
    
      socket.on('message', (message: any) => {
        const parsedMessage = JSON.parse(message);
        dispatch(fetchMessagesRealtime(parsedMessage));
      });
      return () => socket.disconnect();
    }, [dispatch, id]);

  const validate = (values: IFormikInitialValues) => {
    const errors: FormikErrors<IFormikInitialValues> = {};
    if (!values.text) {
      errors.text = 'Empty';
    }
  }

  const formik: FormikProps<IFormikInitialValues> = useFormik<IFormikInitialValues>({
    initialValues: {
      text: '',
    },
    onSubmit: onSubmit,
    validate: validate,
  });

  
  if (!chats.length || !messages.length) {
    return null;
  }

  return <ChatComponent
    chats={chats}
    messages={messages}
    isFetchedAll={isFetchedAll}
    isLoading={isLoading}
    fetchMore={fetchMore}
    chatBottomRef={chatBottomRef}
    saller={chats[chatId]?.participants[0]}
    product={chats[chatId]?.product}
    formik={formik} />;
}

const mapStateToProps = (state: RootState) => ({
  chats: state.chats.chats,
  messages: state.messages.messages,
  isFetchedAll: state.messages.isFetchedAll,
  isLoading: state.messages.isLoading,
});

export default connect(mapStateToProps)(Chat);