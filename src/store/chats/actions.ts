import { 
  ChatsActionTypes, 
  ChatsActionCreatorsTypes,
  IChat
} from '../../types/chats';
import axios from 'axios';
import { Dispatch } from 'redux';
import { store } from '../indexReducer';
import { sendMessage } from '../messages/actions';

export const fetchChats = () => {
  return async (dispatch: Dispatch<ChatsActionCreatorsTypes>) => {
    try {
      dispatch({ type: ChatsActionTypes.FETCH_CHATS });
      const res = await axios.get('/api/chats', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch({ 
        type: ChatsActionTypes.FETCH_CHATS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ChatsActionTypes.FETCH_CHATS_ERROR });
    }
  }
}

export const createChat = (text: string, productId: string) => {
  return async (dispatch: Dispatch<ChatsActionCreatorsTypes & any>) => {
    try {
      const res = await axios.post(`/api/products/${productId}/createChat`, {}, {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      await axios.post(`/api/chats/${res.data.id}/messages`, 
      { text }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
    } catch (error) {
      if (error.response.status === 409) {
        console.log('409')
        const chatsRes: any = await axios.get('/api/chats', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const chatId = chatsRes.data.findIndex(
          (chat: IChat) => chat.productId === productId);
        dispatch(sendMessage(
          store.getState().chats.chats[chatId].id, 
          text, 
          store.getState().viewer.viewer.id
        ));
      }
      console.log(error.response.data);
    }
  }
}