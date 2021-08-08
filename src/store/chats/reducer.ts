import { IInitialState, TAction, ChatActionTypes } from '../../types/chats';

const initialState: IInitialState = {
  chats: [],
  isChatsLoading: false,
}

export const chatsReducer = (state = initialState, action: TAction): IInitialState => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHATS:
      return {
        ...state,
        isChatsLoading: true,
      }
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return {
        ...state,
        isChatsLoading: false,
        chats: action.payload.sort((a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt),
      } 
    case ChatActionTypes.FETCH_CHATS_ERROR:
      return {
        ...state,
        isChatsLoading: false,
        chats: [],
      }
    case ChatActionTypes.ADD_LAST_MESSAGE: 
      const chatIndex = state.chats.findIndex(
        chat => chat.id === action.payload.chatId);
      state.chats[chatIndex].lastMessage = action.payload.lastMessage;
      return {
        ...state,
        chats: [...state.chats],
      }
    default: 
      return state;
  }
}
