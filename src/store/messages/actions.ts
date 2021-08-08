import axios from 'axios';
import { MessagesActionTypes, MessagesCreatorTypes } from '../../types/messages';
import { Dispatch } from 'redux';
import { TAction as ChatTAction, ChatActionTypes } from '../../types/chats';

export const fetchMessages = (chatId: string, fromId: number | null) => {
  const limit = 20; 
  return async (dispatch: Dispatch<MessagesCreatorTypes>) => {
    try {
      if (fromId === null) {
        dispatch({ type: MessagesActionTypes.CLEAR_MESSAGES });
      }
      dispatch({ type: MessagesActionTypes.FETCH_MESSAGES });
      const res = await axios.get(`/api/chats/${chatId}/messages`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        params: {
          from: fromId,
          limit,
        }
      });
      if (res.data.length < limit) {
        dispatch({type: MessagesActionTypes.FETCH_ALL });
      }
      dispatch({ 
        type: MessagesActionTypes.FETCH_MESSAGES_SUCCESS, 
        payload: res.data,
      })
    } catch (error) {
      console.log(error);
      dispatch({ type: MessagesActionTypes.FETCH_MESSAGES_ERROR });
    }
  }
}

export const sendMessage = (chatId: string, text: string, userId: string) => {
  return async (dispatch: Dispatch<MessagesCreatorTypes | ChatTAction>) => {
    try {
      const message = {
        id: Math.random(),
        chatId: chatId,
        ownerId: userId,
        text,
        read: false,
        createdAt: Date.now(),
        updatedAt: null,
      }
      dispatch({ 
        type: MessagesActionTypes.ADD_MESSAGE,
        payload: message,
      });
      dispatch({ type: MessagesActionTypes.SEND_MESSAGE });
      const res = await axios.post(`/api/chats/${chatId}/messages`, { text }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      });
      dispatch({ 
        type: MessagesActionTypes.SEND_MESSAGE_SUCCESS,
        payload: {
          message: res.data,
          oldMessageId: message.id,
        }
      });
      dispatch({ 
        type: ChatActionTypes.ADD_LAST_MESSAGE,
        payload: {
          lastMessage: res.data,
          chatId: res.data.chatId,
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: MessagesActionTypes.SEND_MESSAGE_ERROR });
    }
  }
}

export const fetchMessagesRealtime = (message: any) => {
  return async (dispatch: Dispatch<MessagesCreatorTypes | ChatTAction>) => {
    try {
      if (message.type === 'ADD') {
        dispatch({ 
          type: MessagesActionTypes.ADD_MESSAGE,
          payload: message.message,
        });
        dispatch({
          type: ChatActionTypes.ADD_LAST_MESSAGE,
          payload: {
            lastMessage: message.message,
            chatId: message.message.chatId,
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const clearMessages = () => {
  return async (dispatch: Dispatch<MessagesCreatorTypes>) => {
    dispatch({ type: MessagesActionTypes.CLEAR_MESSAGES });
  }
}